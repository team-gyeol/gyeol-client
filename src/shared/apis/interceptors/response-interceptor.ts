import { routePath } from "@router/path";
import type { InternalAxiosRequestConfig } from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import { AxiosError } from "axios";

import { tokenService } from "@shared/auth/token-service";

import { refreshAccessToken } from "../domain/auth";

// 리프레시 토큰 갱신 중 플래그 (동시 요청 방지)
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (error?: unknown) => void;
}> = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

/**
 * 응답 인터셉터: 성공 응답은 그대로 통과
 */
export const onResponseFulfilled = (response: AxiosResponse) => response;

/**
 * 응답 인터셉터: 401, 403 에러 시 자동으로 토큰 갱신 또는 로그아웃 처리
 */
export const setupResponseInterceptor = (instance: AxiosInstance) => {
  return async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    const status = error.response?.status;

    // 403 Forbidden 에러는 토큰이 만료되었거나 권한이 없는 경우이므로 로그아웃 처리
    if (status === 403) {
      tokenService.removeAccessToken();
      tokenService.removeRefreshToken();
      window.dispatchEvent(new Event("loginStatusChanged"));
      window.location.href = routePath.ROOT;
      return Promise.reject(error);
    }

    // 401 에러이고, 이미 재시도한 요청이 아닌 경우
    if (status === 401 && !originalRequest._retry) {
      // 리프레시 토큰 API 자체가 401이면 로그아웃 처리
      if (originalRequest.url?.includes("token/refresh")) {
        tokenService.removeAccessToken();
        tokenService.removeRefreshToken();
        window.dispatchEvent(new Event("loginStatusChanged"));
        window.location.href = routePath.ROOT;
        return Promise.reject(error);
      }

      // 이미 리프레시 중이면 대기열에 추가
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return instance(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = tokenService.getRefreshToken();

      if (!refreshToken) {
        processQueue(error, null);
        isRefreshing = false;
        tokenService.removeAccessToken();
        tokenService.removeRefreshToken();
        window.dispatchEvent(new Event("loginStatusChanged"));
        window.location.href = routePath.ROOT;
        return Promise.reject(error);
      }

      try {
        const response = await refreshAccessToken({ refreshToken });
        const { accessToken } = response;

        if (!accessToken) {
          throw new Error("액세스 토큰이 응답에 없습니다.");
        }

        tokenService.saveAccessToken(accessToken);

        // 대기 중인 요청들 처리
        processQueue(null, accessToken);

        // 원래 요청 재시도
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }

        isRefreshing = false;
        return instance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError, null);
        isRefreshing = false;
        tokenService.removeAccessToken();
        tokenService.removeRefreshToken();
        window.dispatchEvent(new Event("loginStatusChanged"));
        window.location.href = routePath.ROOT;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  };
};

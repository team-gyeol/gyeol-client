import type { InternalAxiosRequestConfig } from "axios";

import { tokenService } from "@shared/auth/token-service";

/**
 * 요청 인터셉터: 인증 토큰을 헤더에 추가
 * 카카오 콜백과 토큰 리프레시 API는 제외
 */
export const setupRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const isKakaoCallback =
    config.url?.includes("oauth/kakao/callback") ||
    config.url?.includes("/api/oauth/kakao/callback");

  const isTokenRefresh = config.url?.includes("token/refresh");

  // 카카오 콜백과 토큰 리프레시 API는 인증 토큰이 필요 없음
  if (isKakaoCallback || isTokenRefresh) {
    if (config.headers) {
      config.headers.Authorization = undefined;
      delete config.headers.Authorization;
    }
    return config;
  }

  const token = tokenService.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};


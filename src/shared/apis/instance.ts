import axios from "axios";

import { tokenService } from "@shared/auth/token-service";
import { appConfig } from "@shared/config/app-config";

export const instance = axios.create({
  baseURL: appConfig.api.baseUrl,
});

instance.interceptors.request.use((config) => {
  const isKakaoCallback =
    config.url?.includes("oauth/kakao/callback") ||
    config.url?.includes("/api/oauth/kakao/callback");

  if (isKakaoCallback) {
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
});

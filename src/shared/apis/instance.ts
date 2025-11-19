import axios from "axios";

import { tokenService } from "@shared/auth/token-service";
import { appConfig } from "@shared/config/app-config";

export const instance = axios.create({
  baseURL: appConfig.api.baseUrl,
});

instance.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

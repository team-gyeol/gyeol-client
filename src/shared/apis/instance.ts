import axios from "axios";

import { appConfig } from "@shared/config/app-config";

import { setupRequestInterceptor } from "./interceptors/request-interceptor";
import {
  onResponseFulfilled,
  setupResponseInterceptor,
} from "./interceptors/response-interceptor";

/**
 * Axios 인스턴스 생성 및 인터셉터 설정
 */
export const instance = axios.create({
  baseURL: appConfig.api.baseUrl,
});

// 요청 인터셉터 등록
instance.interceptors.request.use(setupRequestInterceptor);

// 응답 인터셉터 등록
instance.interceptors.response.use(
  onResponseFulfilled,
  setupResponseInterceptor(instance),
);

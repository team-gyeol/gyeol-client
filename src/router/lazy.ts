import { lazy } from "react";

export const HomePage = lazy(() => import("@pages/home/home"));
export const LoginPage = lazy(() => import("@pages/login/login"));
export const UploadPage = lazy(() => import("@pages/upload/upload"));
export const MyPage = lazy(() => import("@pages/my/my"));
export const LoginCallbackPage = lazy(
  () => import("@pages/login-fallback/login-fallback"),
);

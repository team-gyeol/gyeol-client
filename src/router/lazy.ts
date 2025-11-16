import { lazy } from "react";

export const HomePage = lazy(() => import("@pages/home/home"));
export const LoginPage = lazy(() => import("@pages/login/login"));
export const UploadPage = lazy(() => import("@pages/upload/upload"));

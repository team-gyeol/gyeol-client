import { routePath } from "@router/path";

export const appConfig = {
  auth: {
    loginSuccessUrl: routePath.LOGIN_FALLBACK,
    loginFailUrl: routePath.LOGIN,
    kakaoLoginUrl: import.meta.env.VITE_KAKAO_LOGIN_URL || "",
    kakaoProdRedirectUrl: import.meta.env.VITE_KAKAO_PROD_REDIRECT_URI || "",
    kakaoLocalRedirectUrl: import.meta.env.VITE_KAKAO_LOCAL_REDIRECT_URL || "",
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  },
};

export const routePath = {
  LAYOUT: "/",
  ROOT: "/",
  LOGIN: "/auth/login",
  UPLOAD: "/upload",
  MY: "/my",

  LOGIN_FALLBACK: "/login-fallback",
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];

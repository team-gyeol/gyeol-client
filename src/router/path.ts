export const routePath = {
  LAYOUT: "/",
  ROOT: "/",
  LOGIN: "/auth/login",
  UPLOAD: "/upload",
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];

import {
  HomePage,
  LoginCallbackPage,
  LoginPage,
  MyPage,
  UploadPage,
} from "../lazy";
import { routePath } from "../path";

export const globalRoutes = [
  {
    path: routePath.ROOT,
    Component: HomePage,
  },
  {
    path: routePath.LOGIN,
    Component: LoginPage,
  },
  {
    path: routePath.LOGIN_FALLBACK,
    Component: LoginCallbackPage,
  },
  {
    path: routePath.CALLBACK,
    Component: LoginCallbackPage,
  },
  {
    path: routePath.UPLOAD,
    Component: UploadPage,
  },
  {
    path: routePath.MY,
    Component: MyPage,
  },
];

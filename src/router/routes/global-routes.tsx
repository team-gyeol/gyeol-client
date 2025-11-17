import { HomePage, LoginPage, UploadPage } from "../lazy";
import { routePath } from "../path";

export const globalRoutes = [
  {
    path: routePath.ROOT,
    element: <HomePage />,
  },
  {
    path: routePath.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routePath.UPLOAD,
    element: <UploadPage />,
  },
];

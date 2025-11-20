import { Suspense } from "react";
import { Outlet } from "react-router";

import ScrollToTop from "./scroll-to-top";

export default function GlobalLayout() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

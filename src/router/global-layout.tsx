import { Suspense } from "react";
import { Outlet } from "react-router";

import Spinner from "@shared/components/spinner/spinner";

import ScrollToTop from "./scroll-to-top";

export default function GlobalLayout() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}

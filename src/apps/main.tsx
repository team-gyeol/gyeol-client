import { StrictMode } from "react";
import { router } from "@router/router.tsx";
import { QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { rootStyle } from "@shared/styles/global.css.ts";
import ThemeProvider from "@shared/styles/theme-provider";
import { queryClient } from "@shared/utils/query-client";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider className={rootStyle}>
        <RouterProvider router={router} />
        <App />
      </ThemeProvider>

<ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);

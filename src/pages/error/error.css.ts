import { style } from "@vanilla-extract/css";

import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const text = style({
  ...fontStyles.head_hv_35,
});

export const contents = style({
  ...fontStyles.body_b_18,
});

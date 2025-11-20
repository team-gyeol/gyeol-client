import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  width: "100vw",
  height: "100vh",
  paddingTop: "8rem",
  backgroundColor: color.black100,
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  paddingRight: "10rem",
});

export const text = style({
  ...fontStyles.head_hv_55,
  color: color.white100,
});

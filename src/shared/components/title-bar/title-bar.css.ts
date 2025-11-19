import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const titleBar = style({
  ...fontStyles.body_b_14,
  color: color.white100,
  width: "100%",
  height: "3rem",
  backgroundColor: color.black100,
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
});

import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  padding: "0 6rem",
  backgroundColor: color.black100,
});

export const textContainer = style({});

export const text = style({
  ...fontStyles.head_hv_45,
  color: color.white100,
});

export const secondTitletext = style([
  text,
  {
    paddingLeft: "5rem",
  },
]);

export const image = style({
  width: "40rem",
  objectFit: "contain",
});

import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  padding: "0 10rem",
  backgroundColor: color.black100,
});

export const textContainer = style({});

export const text = style({
  ...fontStyles.head_hv_55,
  color: color.white100,
});

export const secondTitletext = style([
  text,
  {
    paddingLeft: "5rem",
  },
]);

export const image = style({
  width: "50rem",
  objectFit: "contain",
});

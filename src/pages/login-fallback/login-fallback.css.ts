import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.white200,
  padding: "2rem",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
  maxWidth: "32rem",
});

export const text = style({
  ...fontStyles.body_b_20,
  color: color.black100,
  textAlign: "center",
  lineHeight: 1.5,
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

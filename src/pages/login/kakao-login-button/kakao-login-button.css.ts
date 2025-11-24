//kakao-login-button.css.ts

import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const container = style({
  display: "flex",
  width: "100%",
  height: "5.1rem",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  padding: "0 8rem",
  borderRadius: "12px",
  backgroundColor: "#FEE500",
  gap: "0.7rem",
  cursor: "pointer",
  whiteSpace: "nowrap",

  color: color.black100,
  fontSize: "1.7rem",
  fontWeight: 600,
  fontStyle: "normal",
  lineHeight: "150%",
});

import { keyframes, style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color.white100,
});

export const spinner = style({
  width: "5rem",
  height: "5rem",
  border: `0.4rem solid ${color.white200}`,
  borderTop: `0.4rem solid ${color.black100}`,
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
});


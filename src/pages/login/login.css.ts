//login.css.ts

import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const loginContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
});

export const loginSection = style({
  maxWidth: "50rem",
  height: "35rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  padding: "6rem 5rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const textContainer = style({});

export const title = style([
  {
    ...fontStyles.title_eb_25,
    color: color.black100,
  },
  screen.mobile({
    ...fontStyles.body_b_20,
  }),
]);

export const button = style({
  ...fontStyles.section_r_12,
  width: "100%",
  display: "flex",
  justifyContent: "end",
  paddingTop: "1rem",
});

import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const footerContainer = style([
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100vw",
    height: "45rem",
    padding: "7rem 12rem 3rem 12rem",
    backgroundColor: color.black300,
    color: color.white100,
  },
  screen.mobile({
    height: "35rem",
    padding: " 2rem",
  }),
]);

export const topContainer = style({
  display: "flex",
  justifyContent: "space-between",
});

export const divideContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "3rem",
});

export const sectionContainer = style({
  minHeight: "13rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const title = style({
  ...fontStyles.body_b_14,
});

export const contents = style({
  ...fontStyles.section_r_14,
});

export const etc = style([
  screen.mobile({
    display: "none",
  }),
]);

export const safecodeBottomContainer = style({
  display: "flex",
  justifyContent: "end",
  width: "100%",
});

import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  height: "100vh",
  scrollMarginTop: "8rem",
});

export const introduceContainer = style([
  {
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  screen.mobile({
    height: "40%",
  }),
]);

export const infoText = style({
  ...fontStyles.section_r_16,
  display: "flex",
  justifyContent: "center",
});

const titleText = style([
  {
    ...fontStyles.head_hv_80,
  },
  screen.mobile({
    padding: "0 2rem",
    ...fontStyles.head_hv_45,
  }),
]);

export const firstTitleText = style([titleText]);

export const secondTitleText = style([
  titleText,
  {
    paddingLeft: "50rem",
  },
  screen.mobile({
    textAlign: "center",
  }),
]);

export const startContainer = style([
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5rem",
    height: "50%",
    backgroundColor: color.black100,
    color: color.white100,
  },
  screen.mobile({
    height: "60%",
  }),
]);

export const startText = style({
  ...fontStyles.section_r_20,
});

export const button = style([
  {
    ...fontStyles.title_eb_30,
  },
  screen.mobile({
    marginBottom: "5rem",
  }),
]);

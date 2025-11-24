import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const teamContainer = style([
  {
    backgroundColor: color.black100,
    color: color.white100,
    padding: "0 8rem 3rem 10rem",
    scrollMarginTop: "8rem",
  },
  screen.mobile({
    padding: "0",
    paddingBottom: "10rem",
  }),
]);

export const infoContainer = style([
  {
    display: "flex",
  },
  screen.mobile({
    marginTop: "6rem",
  }),
]);

export const image = style([
  {
    width: "24rem",
    objectFit: "contain",
  },
  screen.mobile({
    width: "15rem",
  }),
]);

export const textContainer = style({
  paddingTop: "7rem",
});

export const infoMiddleContainer = style([
  infoContainer,
  {
    justifyContent: "end",
  },
]);

export const englishName = style([
  {
    ...fontStyles.head_hv_35,
  },
  screen.mobile({
    ...fontStyles.head_hv_30,
  }),
]);

export const koreanName = style([
  {
    ...fontStyles.head_hv_30,
  },
  screen.mobile({
    ...fontStyles.head_hv_20,
  }),
]);

export const role = style([
  {
    ...fontStyles.head_hv_20,
  },
  screen.mobile({
    ...fontStyles.body_b_14,
  }),
]);

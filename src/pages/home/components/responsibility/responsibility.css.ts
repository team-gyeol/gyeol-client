import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style([
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100vw",
    height: "100dvh",
    paddingTop: "8rem",
    backgroundColor: color.black100,
  },
  screen.mobile({
    justifyContent: "center",
    gap: "10rem",
  }),
]);

export const textContainer = style([
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",
    paddingRight: "10rem",
  },
  screen.mobile({
    paddingRight: "2rem",
  }),
]);

export const text = style([
  {
    ...fontStyles.head_hv_55,
    color: color.white100,
  },
  screen.mobile({
    fontSize: "2.3rem",
  }),
]);

export const image = style([
  screen.mobile({
    width: "40rem",
  }),
]);

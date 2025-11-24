import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style([
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    padding: "0 10rem",
    backgroundColor: color.black100,
  },
  screen.mobile({
    flexDirection: "column",
    padding: "10rem 0",
    gap: "5rem",
  }),
]);

export const text = style([
  {
    ...fontStyles.head_hv_55,
    color: color.white100,
  },
  screen.mobile({
    fontSize: "2.3rem",
    textAlign: "center",
  }),
]);

export const image = style([
  {
    width: "55rem",
    objectFit: "contain",
  },
  screen.mobile({
    width: "38rem",
  }),
]);

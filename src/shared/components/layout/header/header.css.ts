import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const headerContainer = recipe({
  base: [
    {
      position: "fixed",
      left: "0",
      top: "0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "8rem",
      padding: "0 6rem",
      backgroundColor: color.white100,
    },
    screen.mobile({
      padding: "0 2.2rem",
    }),
  ],
  variants: {
    darkMode: {
      true: {
        backgroundColor: color.black100,
        color: color.white100,
      },
      false: {
        backgroundColor: color.white100,
        color: color.black300,
      },
    },
  },
});

export const textContainer = style({
  display: "flex",
  gap: "4rem",
});

export const logoLoginText = style([
  {
    ...fontStyles.section_r_14,
  },
  screen.mobile({
    fontSize: "1.2rem",
  }),
]);

export const text = style([
  {
    ...fontStyles.section_r_14,
  },
  screen.mobile({
    display: "none",
  }),
]);

export const upload = style({
  cursor: "pointer",
});

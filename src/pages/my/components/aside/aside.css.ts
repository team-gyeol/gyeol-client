import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const asideContainer = style({
  display: "flex",
  gap: "1rem",
  whiteSpace: "nowrap",
  minWidth: "20rem",
});

export const verticalLine = style({
  width: "0.2rem",
  backgroundColor: color.black200,
  height: "10.4rem",
  borderRadius: "2px",
});

export const asideTitle = style({
  ...fontStyles.section_r_14,
  fontSize: "1.68rem",
  color: color.black300,
  fontWeight: "700",
  marginBottom: "0.5rem",
});

export const listContainer = style([
  {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginTop: "1.8rem",
    listStyle: "none",
  },
  screen.mobile({
    flexDirection: "revert",
    gap: "2rem",
  }),
]);

export const list = recipe({
  base: {
    cursor: "pointer",
    fontSize: "1.5rem",
    width: "100%",
    padding: "0.5rem 0",
    transition: "color 0.2s",
    backgroundColor: "transparent",
    border: "none",
    textAlign: "left",
  },
  variants: {
    isClick: {
      true: {
        color: color.black300,
        fontWeight: "600",
      },
      false: {
        color: color.gray100,
        fontWeight: "400",
        ":hover": {
          color: color.black200,
        },
      },
    },
  },
});

export const mobile = style([
  screen.mobile({
    display: "none",
  }),
]);

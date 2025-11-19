import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const asideContainer = style({
  display: "flex",
  gap: "1rem",
  whiteSpace: "nowrap",
});

export const verticalLine = style({
  width: "0.2rem",
  backgroundColor: color.black200,
  height: "11.4rem",
});

export const asideTitle = style({
  ...fontStyles.section_r_14,
  fontSize: "1.6rem",
});

export const listContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1.5rem",
});

export const list = recipe({
  base: { cursor: "pointer", fontSize: "1.3rem", width: "100%" },
  variants: {
    isClick: {
      true: { color: color.black300 },
      false: { color: color.gray100 },
    },
  },
});

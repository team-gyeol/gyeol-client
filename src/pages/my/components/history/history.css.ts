import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const historyContainer = recipe({
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 2rem",
    width: "100%",
    minHeight: "8rem",
    border: `1px solid ${color.border100}`,
    borderRadius: "4px",
    backgroundColor: color.white100,
    transition: "background-color 0.2s",
    listStyle: "none",
  },
  variants: {
    isClickable: {
      true: {
        cursor: "pointer",
        ":hover": {
          backgroundColor: color.white200,
        },
      },
      false: {
        cursor: "default",
      },
    },
  },
});

export const leftContentsContiner = style({
  display: "flex",
  gap: "1.5rem",
  alignItems: "center",
  flex: 1,
});

export const image = style({
  width: "5rem",
  height: "5rem",
  objectFit: "cover",
  borderRadius: "4px",
  border: `1px solid ${color.border100}`,
  backgroundColor: color.white200,
});

export const contentsContiner = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  flex: 1,
});

export const title = style({
  ...fontStyles.section_r_14,
  color: color.black300,
  fontWeight: "600",
  fontSize: "1.4rem",
  lineHeight: "1.4",
});

export const text = style({
  ...fontStyles.section_r_12,
  color: color.gray100,
  fontSize: "1.2rem",
  lineHeight: "1.4",
});

export const rightContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  color: color.gray100,
  fontSize: "1.2rem",
});

export const deleteButton = style({
  padding: "0.5rem 1rem",
  backgroundColor: "transparent",
  color: color.error_red,
  border: `1px solid ${color.error_red}`,
  borderRadius: "4px",
  fontSize: "1.2rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: color.error_red,
    color: color.white100,
  },
});

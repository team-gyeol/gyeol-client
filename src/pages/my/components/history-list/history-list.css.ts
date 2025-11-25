import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const historyListContainer = style([
  {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  screen.mobile({
    marginBottom: "8rem",
  }),
]);

export const emptyMessage = style({
  fontSize: "2rem",
  fontWeight: "600",
  textAlign: "center",
  padding: "4rem 2rem",
  color: color.gray100,
});

export const paginationContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  marginTop: "3rem",
  padding: "2rem 0",
});

export const paginationButton = style({
  padding: "0.8rem 1.6rem",
  backgroundColor: color.white100,
  color: color.black200,
  border: `1px solid ${color.border100}`,
  borderRadius: "4px",
  fontSize: "1.4rem",
  fontWeight: "500",
  cursor: "pointer",
  transition: "all 0.2s",
  ":hover": {
    backgroundColor: color.white200,
    borderColor: color.black100,
  },
  ":disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

export const paginationNumbers = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const paginationGroup = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const paginationEllipsis = style({
  ...fontStyles.section_r_14,
  color: color.gray100,
  padding: "0 0.5rem",
});

export const paginationNumberButton = recipe({
  base: {
    minWidth: "3.6rem",
    height: "3.6rem",
    padding: "0 1rem",
    backgroundColor: color.white100,
    color: color.black200,
    border: `1px solid ${color.border100}`,
    borderRadius: "4px",
    fontSize: "1.4rem",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ":hover": {
      backgroundColor: color.white200,
      borderColor: color.black100,
    },
  },
  variants: {
    isActive: {
      true: {
        backgroundColor: color.black200,
        color: color.white100,
        borderColor: color.black200,
        fontWeight: "600",
        ":hover": {
          backgroundColor: color.black200,
        },
      },
      false: {},
    },
  },
});

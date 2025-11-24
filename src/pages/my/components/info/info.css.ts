import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

import { color } from "@shared/styles/token/color.css";

export const infoContainer = style([
  {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4rem 16rem 2rem 10rem",
    gap: "3rem",
    backgroundColor: color.white100,
  },
  screen.mobile({
    flexDirection: "column",
    padding: "2rem 0",
    gap: "5rem",
  }),
]);

export const sectionContainer = style({
  display: "flex",
  gap: "3rem",
  alignItems: "center",
});

export const image = style({
  width: "10rem",
  height: "10rem",
  objectFit: "cover",
  borderRadius: "50%",
  border: `2px solid ${color.border100}`,
});

export const verticalLine = style([
  {
    width: "0.1rem",
    backgroundColor: color.border100,
    margin: "2rem 6rem 2rem 0",
    height: "8rem",
  },
  screen.mobile({
    display: "none",
  }),
]);

export const titleContentsContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

export const contents = style({
  fontSize: "1.4rem",
  color: color.black200,
});

export const textContainer = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const highlight = style({
  fontSize: "2.5rem",
  fontWeight: "800",
  color: color.black300,
});

export const logoutContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "5rem",
});

export const logoutButton = style({
  fontSize: "1.2rem",
  fontWeight: "600",
  padding: "1rem 1.5rem",
  backgroundColor: color.black100,
  color: color.white100,
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.2s",
});

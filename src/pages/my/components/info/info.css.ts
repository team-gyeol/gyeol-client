import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const infoContainer = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "4rem 16rem 2rem 10rem",
  gap: "3rem",
});

export const sectionContainer = style({
  display: "flex",
  gap: "3rem",
  borderRadius: "100px",
});

export const image = style({
  width: "10rem",
  height: "10rem",
  objectFit: "contain",
  borderRadius: "50%",
});

export const verticalLine = style({
  width: "0.1rem",
  backgroundColor: color.gray100,
  margin: "2rem 6rem 2rem 0",
});

export const titleContentsContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
});

export const contents = style({
  fontSize: "1.4rem",
});

export const textContainer = style({
  display: "flex",
  alignItems: "center",
});

export const highlight = style({
  fontSize: "2.5rem",
  fontWeight: "800",
});

import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const infoContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4rem 16rem 2rem 10rem",
  gap: "3rem",
  backgroundColor: color.white100,
});

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

export const verticalLine = style({
  width: "0.1rem",
  backgroundColor: color.border100,
  margin: "2rem 6rem 2rem 0",
  height: "8rem",
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
  padding: "2rem 16rem 2rem 10rem",
});

export const logoutButton = style({
  padding: "1rem 2rem",
  fontSize: "1.4rem",
  fontWeight: "600",
  color: color.white100,
  backgroundColor: color.error_red,
  border: "none",
  borderRadius: "0.4rem",
  cursor: "pointer",
  transition: "opacity 0.2s",

  ":hover": {
    opacity: 0.8,
  },

  ":active": {
    opacity: 0.6,
  },
});

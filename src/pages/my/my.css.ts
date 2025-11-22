import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";

export const myAllContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "5rem 16rem 6rem 16rem",
  gap: "2rem",
  backgroundColor: color.white100,
  minHeight: "100vh",
});

export const infoHistoryContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
  flex: 1,
});

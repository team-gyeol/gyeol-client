import { style } from "@vanilla-extract/css";

export const myAllContainer = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  padding: "5rem 16rem 6rem 16rem",

  gap: "2rem",
});

export const infoHistoryContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "5rem",
});

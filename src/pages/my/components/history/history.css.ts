import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const historyContainer = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem",
  width: "100%",
  height: "8rem",
  borderBottom: `1px solid ${color.gray100}`,
});

export const leftContentsContiner = style({
  display: "flex",
  gap: "2rem",
});

export const image = style({
  width: "4rem",
  height: "4rem",
  objectFit: "cover",
});

export const contentsContiner = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const title = style({
  ...fontStyles.section_r_14,
});

export const text = style({
  ...fontStyles.section_r_12,
  color: color.gray100,
});

export const rightContainer = style({
  display: "flex",
  alignItems: "center",
});

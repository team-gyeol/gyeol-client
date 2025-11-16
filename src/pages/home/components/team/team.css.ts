import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const teamContainer = style({
  backgroundColor: color.black100,
  color: color.white100,
  padding: "0 6rem 3rem 6rem",
});

export const infoContainer = style({
  display: "flex",
});

export const image = style({
  width: "25rem",
  objectFit: "contain",
});

export const textContainer = style({
  paddingTop: "7rem",
});

export const infoMiddleContainer = style([
  infoContainer,
  {
    justifyContent: "end",
  },
]);

export const englishName = style({
  ...fontStyles.head_hv_35,
});

export const koreanName = style({
  ...fontStyles.head_hv_30,
});

export const role = style({
  ...fontStyles.head_hv_20,
});

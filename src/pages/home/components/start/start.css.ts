import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

export const container = style({
  height: "100vh",
});

export const introduceContainer = style({
  height: "60%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "6rem",
});

export const infoText = style({
  ...fontStyles.section_r_16,
  display: "flex",
  justifyContent: "center",
});

export const firstTitleText = style({
  ...fontStyles.head_hv_80,
});

export const secondTitleText = style({
  ...fontStyles.head_hv_80,
  paddingLeft: "50rem",
});

export const startContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  height: "40%",
  backgroundColor: color.black100,
  color: color.white100,
});

export const startText = style({
  ...fontStyles.section_r_20,
});

export const button = style({
  ...fontStyles.title_eb_30,
});

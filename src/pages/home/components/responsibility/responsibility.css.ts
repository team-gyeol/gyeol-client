import { style } from "@vanilla-extract/css";

import { color } from "@shared/styles/token/color.css";
import { fontStyles } from "@shared/styles/token/font-style.css";

// import { color } from "@shared/styles/token/color.css";
// import { fontStyles } from "@shared/styles/token/font-style.css";

// export const container = style({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "end",
//   width: "100vw",
//   height: "100vh",
//   paddingTop: "6rem",
//   backgroundColor: color.white100,
// });

// export const textContainer = style({});

// export const text = style({
//   ...fontStyles.head_hv_45,
//   color: color.white100,
// });

// export const secondTitletext = style([
//   text,
//   {
//     paddingLeft: "5rem",
//   },
// ]);

// export const image = style({
//   objectFit: "contain",
// });

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
  width: "100vw",
  height: "100vh",
  paddingTop: "8rem",
  backgroundColor: color.black100,
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  paddingRight: "6rem",
});

export const text = style({
  ...fontStyles.head_hv_45,
  color: color.white100,
});

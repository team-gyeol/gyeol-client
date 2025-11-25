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
    "@media": {
      "(max-width: 1300px)": {
        padding: "3rem 4rem 2rem 4rem",
        gap: "2rem",
        justifyContent: "space-around",
      },
      "(max-width: 1100px)": {
        flexDirection: "column",
        padding: "2rem 2rem",
        gap: "3rem",
      },
    },
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
  "@media": {
    "(max-width: 1300px)": {
      gap: "2rem",
    },
    "(max-width: 768px)": {
      flexDirection: "column",
      gap: "1.5rem",
    },
  },
});

export const image = style({
  width: "10rem",
  height: "10rem",
  objectFit: "cover",
  borderRadius: "50%",
  border: `2px solid ${color.border100}`,
  "@media": {
    "(max-width: 1300px)": {
      width: "8rem",
      height: "8rem",
    },
    "(max-width: 768px)": {
      width: "7rem",
      height: "7rem",
    },
  },
});

export const imagePlaceholder = style({
  width: "10rem",
  height: "10rem",
  objectFit: "cover",
  borderRadius: "50%",
  "@media": {
    "(max-width: 1300px)": {
      width: "8rem",
      height: "8rem",
    },
    "(max-width: 768px)": {
      width: "7rem",
      height: "7rem",
    },
  },
});

export const verticalLine = style([
  {
    width: "0.1rem",
    backgroundColor: color.border100,
    margin: "2rem 6rem 2rem 0",
    height: "8rem",
    "@media": {
      "(max-width: 1300px)": {
        margin: "2rem 3rem 2rem 0",
      },
      "(max-width: 1100px)": {
        display: "none",
      },
    },
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
  "@media": {
    "(max-width: 1300px)": {
      gap: "1.5rem",
    },
    "(max-width: 768px)": {
      gap: "1rem",
    },
  },
});

export const contents = style({
  fontSize: "1.4rem",
  color: color.black200,
  "@media": {
    "(max-width: 1300px)": {
      fontSize: "1.3rem",
    },
    "(max-width: 768px)": {
      fontSize: "1.2rem",
    },
  },
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
  "@media": {
    "(max-width: 1300px)": {
      fontSize: "2.2rem",
    },
    "(max-width: 768px)": {
      fontSize: "2rem",
    },
  },
});

export const logoutContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  paddingTop: "5rem",
  "@media": {
    "(max-width: 1300px)": {
      paddingTop: "3rem",
      paddingRight: "2rem",
    },
    "(max-width: 768px)": {
      justifyContent: "center",
      paddingTop: "2rem",
      paddingRight: "0",
    },
  },
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

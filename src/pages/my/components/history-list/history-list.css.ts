import { style } from "@vanilla-extract/css";

import { screen } from "@shared/styles";

export const historyListContainer = style([
  {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  screen.mobile({
    marginBottom: "8rem",
  }),
]);

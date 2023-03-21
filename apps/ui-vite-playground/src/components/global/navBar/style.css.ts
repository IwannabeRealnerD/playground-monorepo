import { style } from "@vanilla-extract/css";

export const cssObj = {
  container: style({
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "pink",
  }),
  heading: style({
    backgroundColor: "gray",
  }),
};

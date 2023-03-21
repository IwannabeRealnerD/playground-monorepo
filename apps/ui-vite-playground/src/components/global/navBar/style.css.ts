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
  iconContainer: style({ display: "flex", alignItems: "center" }),
  iconButton: style({ fontSize: "1.3rem", backgroundColor: "red", display: "flex", alignItems: "center" }),
};

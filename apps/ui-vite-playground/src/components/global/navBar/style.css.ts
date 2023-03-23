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
    fontSize: "1.5rem",
  }),
  iconContainer: style({ display: "flex", alignItems: "center" }),
  iconButton: style({ fontSize: "1.3rem", backgroundColor: "red", display: "flex", alignItems: "center" }),
  searchBoxClosed: style({ width: 0, transition: "0.4s" }),
  searchBoxOpened: style({ width: "10rem", transition: "0.4s" }),
};

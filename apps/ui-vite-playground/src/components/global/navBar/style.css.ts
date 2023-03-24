import { style, keyframes } from "@vanilla-extract/css";

const widthGrowKeyframe = keyframes({ "0%": { width: "0", opacity: 0 }, "100%": { width: "10rem", opacity: 1 } });
const widthShrinkKeyframe = keyframes({ "0%": { width: "10rem", opacity: 1 }, "100%": { width: "0", opacity: 0 } });

export const cssObj = {
  wrapper: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "3rem",
    borderBottom: "1px solid #111111",
  }),
  heading: style({
    fontSize: "1.5rem",
  }),
  inputContainer: style({
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    height: "100%",
    backgroundColor: "blue",
  }),
  container: style({ position: "relative", height: "100%" }),
  iconButton: style({
    fontSize: "1.3rem",
    display: "flex",
    alignItems: "center",
    transition: "all, 0.3s",
    padding: "0.3rem",
    position: "relative",
    zIndex: "1",
    // height: "100%",
    ":hover": { backgroundColor: "rgba(1,1,1,0.2)", borderRadius: "50%" },
  }),
  inputBox: style({ width: "100%" }),

  testContainer: style({
    backgroundColor: "pink",
    height: "100%",
    display: "flex",
    alignItems: "center",
  }),
};

const searchBox = style({
  minHeight: "2.5rem",
  padding: "0.8rem",
  height: "auto",
  borderRadius: "2rem",
  backgroundColor: "rgba(1,1,1,0.2)",
  position: "absolute",
  right: 0,
  top: 0,
  //  position: "absolute", top: "50%"
  // top: "50%",
  // transform: "translateY(-50%)",
});

export const searchBoxClosed = style([
  searchBox,
  {
    animationName: widthShrinkKeyframe,
    animationDuration: "0.3s",
    animationFillMode: "forwards",
  },
]);

export const searchBoxOpened = style([
  searchBox,
  {
    animationName: widthGrowKeyframe,
    animationDuration: "0.3s",
    animationFillMode: "forwards",
  },
]);

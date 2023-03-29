// @mixin TABLET {
//     @media screen and (max-width: 1024px) {
//       @content;
//     }
//   }
//   @mixin MOBILE {
//     @media screen and (max-width: 768px) {
//       @content;
//     }

import { style } from "@vanilla-extract/css";

export const mobileQuery = (content: string) =>
  style({
    "@media": {
      "screen and (min-width: 768px)": {
        content,
      },
    },
  });

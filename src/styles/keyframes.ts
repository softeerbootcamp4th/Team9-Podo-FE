import { transformSync } from "@babel/core";

export const fadeInUp = [
  { transform: "translateY(0px)" },
  { transform: "translateY(-90%)" },
];

export const fadeOutDown = [
  { transform: "translateY(-90%)" },
  { transform: "translateY(0px)" },
];

export const moveRight = [
  { transform: "translateX(0px) scaleX(-0.9) scaleY(0.9)" },
  { transform: "translateX(200vw) scaleX(-0.9) scaleY(0.9)" },
];

export const fadeOut = [{ opacity: "1" }, { opacity: "0" }];

export const fadeIn = [{ opacity: "0" }, { opacity: "1" }];

export const fadeDown = [
  { transform: "translateY(0px)" },
  { transform: "translateY(100vh)" },
];

import { PositionValues, TailwindPosition } from "../types/tailwind";

export const className: Record<TailwindPosition, PositionValues> = {
  bottom: {
    0: "bottom-0",
    2: "bottom-2",
    4: "bottom-4",
    6: "bottom-6",
  },
  top: {
    0: "top-0",
  },
  "-bottom": {},
  "-top": {
    0: "-top-0",
    2: "-top-2",
    4: "-top-4",
    6: "-top-6",
    8: "-top-8",
    10: "-top-10",
    12: "-top-12",
    14: "-top-14",
  },
};

export const GRADIENT_TEXT_STYLE = {
  background:
    "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

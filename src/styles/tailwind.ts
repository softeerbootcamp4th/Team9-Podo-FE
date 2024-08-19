import { PositionValues, TailwindPosition } from "../types/tailwind";

export const className: Record<TailwindPosition, PositionValues> = {
  bottom: {
    0: "bottom-0",
    2: "bottom-2",
    4: "bottom-4",
    6: "bottom-6",
  },
  top: {},
  "-bottom": {},
  "-top": {},
};

export const GRADIENT_TEXT_STYLE = {
  background:
    "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

import { UseAnimationProps } from "../hooks/useAnimation";

export const LANDING_CAR_ANIMATION_OPTIONS: UseAnimationProps = {
  startKeyframes: [
    { transform: "translateX(0)" },
    { transform: "translateX(-160rem)", display: "none" },
  ],
  startOptions: { duration: 500, fill: "forwards", delay: 100 },
};

export const MAIN_CAR_ANIMATION_OPTIONS: UseAnimationProps = {
  startKeyframes: [{ opacity: "0" }, { opacity: "100" }],
  startOptions: { duration: 2000, fill: "forwards", delay: 1000 },
  cancelKeyframes: [{ opacity: "100" }, { opacity: "0" }],
  cancelOptions: { duration: 200, fill: "forwards" },
};

export const TITLE_ANIMATION_OPTIONS: UseAnimationProps = {
  startKeyframes: [{ opacity: "0" }, { opacity: "100" }],
  startOptions: { duration: 2000, fill: "forwards", delay: 600 },
};

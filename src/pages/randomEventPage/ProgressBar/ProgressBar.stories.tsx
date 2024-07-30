import React from "react";
import { MemoryRouter } from "react-router";
import ProgressBar from "./ProgressBar";

export default {
  component: ProgressBar,
  title: "ProgressBar",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    quizIndex: 0,
    maxIndex: 3,
  },
};

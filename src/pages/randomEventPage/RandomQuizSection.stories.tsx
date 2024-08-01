import React from "react";
import RandomQuizSection from "./RandomQuizSection";
import { fn } from "@storybook/test";

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: RandomQuizSection,
  title: "RandomQuizSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Main = {
  args: {},
};

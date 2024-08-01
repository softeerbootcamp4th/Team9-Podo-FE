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
  args: {
    quizInfo: {
      background: "img",
      question: "질문",
      optionList: [
        { label: "A.", content: "당장 앞지르고 달려나간다", state: "default" },
        { label: "B.", content: "당장 앞지르고 달려나간다", state: "default" },
      ],
    },
  },
};

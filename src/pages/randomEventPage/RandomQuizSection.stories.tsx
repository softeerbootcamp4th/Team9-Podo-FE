import React from "react";
import RandomQuizSection from "./RandomQuizSection";

export default {
  component: RandomQuizSection,
  title: "RandomQuizSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    quizIndex: 0,
    selectedIndex: null,
  },
};

export const WithSelectedOption = {
  args: {
    quizIndex: 0,
    selectedIndex: 0,
  },
};

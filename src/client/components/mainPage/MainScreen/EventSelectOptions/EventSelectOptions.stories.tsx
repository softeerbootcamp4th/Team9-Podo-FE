import React from "react";
import { MemoryRouter } from "react-router";
import EventSelectOptions from "./EventSelectOptions";
import { fn } from "@storybook/test";

const setHoverdIndex = fn();

export default {
  component: EventSelectOptions,
  title: "main/EventSelectOptions",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    index: 0,
    hoveredIndex: null,
    setHoverdIndex: setHoverdIndex,
    title: "event 1.",
    description: "매일 선착순 100명! \n퀴즈 풀고 스타벅스 커피 받아가자!",
    img: "",
    buttonInfo: {
      size: "small",
      isEnabled: true,
      defaultText: "참여하기",
      disabledText: "참여불가",
    },
  },
};

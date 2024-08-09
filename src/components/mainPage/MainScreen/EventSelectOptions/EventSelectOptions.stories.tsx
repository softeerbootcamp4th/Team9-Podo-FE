import { MemoryRouter } from "react-router";
import React from "react";
import EventSelectOptions from "./EventSelectOptions";

export default {
  component: EventSelectOptions,
  title: "EventSelectOptions",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
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

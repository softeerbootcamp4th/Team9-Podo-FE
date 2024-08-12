import { MemoryRouter } from "react-router";
import React from "react";
import EventHeader from "./EventHeader";

export default {
  component: EventHeader,
  title: "EventHeader",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    title: "Event 1.",
    description: `소형 SUV 부문 압도적 판매량 1위!\nNo.1 셀토스가 매일 1시 선착순 100명에게 스타벅스 커피를 쏩니다!`,
  },
};

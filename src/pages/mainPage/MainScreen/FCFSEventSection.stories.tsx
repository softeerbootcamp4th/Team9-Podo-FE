import React from "react";
import FCFSEventSection from "./FCFSEventSection";
import { DRIVER_TYPE_LIST } from "../../../constants/RandomEventData";

export default {
  component: FCFSEventSection,
  title: "FCFSEventSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    textList: DRIVER_TYPE_LIST,
    targetText: "안전을 최우선시하는 베스트 드라이버",
  },
};

import React from "react";
import Tooltip from "./Tooltip";

export default {
  component: Tooltip,
  title: "random/Tooltip",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    isVisible: true,
    content: "안녕하세요",
  },
};

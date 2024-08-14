import React from "react";
import Option from "./Option";
import { fn } from "@storybook/test";

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Option,
  title: "random/Option",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Main = {
  args: {
    label: "A.",
    content: "당장 앞지르고 달려나간다",
    state: "default",
  },
};

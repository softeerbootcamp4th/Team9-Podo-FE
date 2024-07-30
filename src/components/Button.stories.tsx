import { fn } from "@storybook/test";
import Button from "./Button";

export const ActionsData = {
  onClick: fn(),
};

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const Main = {
  args: {
    size: "long",
    isEnabled: true,
    defaultText: "참여하기",
    disabledText: "참여불가",
  },
};

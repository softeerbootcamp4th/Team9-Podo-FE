import { Meta } from "@storybook/react/*";
import FCFSHintSection from "./FCFSHintSection";

const meta: Meta<typeof FCFSHintSection> = {
  component: FCFSHintSection,
  title: "FCFSHintSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const show = {
  args: { isShow: true },
};

export const hide = {
  args: { isShow: false },
};

export default meta;

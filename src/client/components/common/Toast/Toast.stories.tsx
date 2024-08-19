import Toast from "./Toast";

export default {
  component: Toast,
  title: "common/Toast",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    content: "content",
    position: "bottom",
    value: 4,
  },
};

import Toast from "./Toast";

export default {
  component: Toast,
  title: "Toast",
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

import AuthTooltip from "./AuthTooltip";

export default {
  component: AuthTooltip,
  title: "common/AuthTooltip",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Authed = {
  args: {
    isAuth: true,
  },
};

export const notAuthed = {
  args: {
    isAuth: false,
  },
};

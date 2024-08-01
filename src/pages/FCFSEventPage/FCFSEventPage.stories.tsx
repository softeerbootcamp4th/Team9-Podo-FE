import FCFSEventPage from "./FCFSEventPage";
import { http, HttpResponse } from "msw";

export default {
  component: FCFSEventPage,
  title: "FCFSEventPage",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Default = {};

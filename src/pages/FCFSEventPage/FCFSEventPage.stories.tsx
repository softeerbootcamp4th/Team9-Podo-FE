import FCFSEventPage from "./FCFSEventPage";
import { http, HttpResponse } from "msw";

export default {
  component: FCFSEventPage,
  title: "FCFSEventPage",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:5000/v1/quiz", () => {
          // ...and respond to them using this JSON response.
          return HttpResponse.json({
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
            firstName: "John",
            lastName: "Maverick",
          });
        }),
      ],
    },
  },
};

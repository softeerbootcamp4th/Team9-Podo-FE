import React from "react";
import type { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import FCFSEventPage from "./FCFSEventPage";
import { http, HttpResponse } from "msw";
import { quizInfo } from "../../mocks/data/FCFSEvent";

const meta: Meta<typeof FCFSEventPage> = {
  component: FCFSEventPage,
  title: "FCFSEventPage",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {},
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:5000/v1/quiz", () => {
          return HttpResponse.json(quizInfo);
        }),
      ],
    },
  },
};

export default meta;

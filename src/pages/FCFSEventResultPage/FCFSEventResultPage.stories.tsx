import React from "react";
import type { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import FCFSEventResultPage from "./FCFSEventResultPage";
import { http, HttpResponse } from "msw";
import { quizInfo } from "../../mocks/data/FCFSEvent";

const meta: Meta<typeof FCFSEventResultPage> = {
  component: FCFSEventResultPage,
  title: "FCFSEventResultPage",
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
        http.get("/v1/quiz", () => {
          return HttpResponse.json(quizInfo);
        }),
      ],
    },
  },
};

export default meta;

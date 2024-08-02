import type { Meta } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import FCFSQuizSection from "./FCFSQuizSection";
import { ReactNode } from "react";
import { quizInfo } from "../../mocks/data/FCFSEvent";

const meta: Meta<typeof FCFSQuizSection> = {
  component: FCFSQuizSection,
  title: "FCFSQuizSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    quizInfo: quizInfo,
  },
};

export const Default = {
  args: {},
};

export default meta;

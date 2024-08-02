import type { Meta } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import FCFSEventPage from "./FCFSEventPage";
import { ReactNode } from "react";

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
  args: {},
};

export default meta;

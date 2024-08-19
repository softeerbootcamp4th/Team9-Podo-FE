import React from "react";
import { Meta } from "@storybook/react/*";
import AuthModal from "./AuthModal";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof AuthModal> = {
  component: AuthModal,
  title: "modal/AuthModal",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = {
  args: {},
};

export default meta;

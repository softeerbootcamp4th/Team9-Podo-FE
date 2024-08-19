import React from "react";
import { MemoryRouter } from "react-router";
import HomeButton from "./HomeButton";

export default {
  component: HomeButton,
  title: "common/HomeButton",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Main = () => (
  <MemoryRouter>
    <HomeButton />
  </MemoryRouter>
);

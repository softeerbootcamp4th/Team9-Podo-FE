import { MemoryRouter } from "react-router";
import React from "react";
import HomeButton from "./HomeButton";

export default {
  component: HomeButton,
  title: "HomeButton",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Main = () => (
  <MemoryRouter>
    <HomeButton />
  </MemoryRouter>
);

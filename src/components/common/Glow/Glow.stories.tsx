import { MemoryRouter } from "react-router";
import React from "react";
import Glow from "./Glow";

export default {
  component: Glow,
  title: "Glow",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Main = () => <Glow></Glow>;

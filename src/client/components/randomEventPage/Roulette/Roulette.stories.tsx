import React from "react";
import Roulette from "./Roulette";
import { DRIVER_TYPE_LIST } from "../../../constants/RandomEventData";

export default {
  component: Roulette,
  title: "random/Roulette",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    textList: DRIVER_TYPE_LIST,
    targetText: "안전을 최우선시하는 베스트 드라이버",
  },
};

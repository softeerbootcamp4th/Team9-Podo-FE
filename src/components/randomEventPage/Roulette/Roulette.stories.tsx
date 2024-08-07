import React from "react";
import Roulette from "./Roulette";

const DRIVER_TYPE_LIST = [
  "안전을 최우선시하는 베스트 드라이버",
  "호기심 많은 얼리어답터",
  "감각적인 트렌드 세터",
  "다이나믹한 모험가",
];

export default {
  component: Roulette,
  title: "Roulette",
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

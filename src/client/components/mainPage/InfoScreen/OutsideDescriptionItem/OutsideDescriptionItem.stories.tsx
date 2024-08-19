import React from "react";
import OutsideDescriptionItem from "./OutsideDescriptionItem";
import { outsideInfoData } from "../../../../constants/InfoData";

export default {
  component: OutsideDescriptionItem,
  title: "main/Info/OutsideDescriptionItem",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Main = {
  args: {
    title: outsideInfoData[0].title,
    description: outsideInfoData[0].content,
    img: outsideInfoData[0].image,
  },
};

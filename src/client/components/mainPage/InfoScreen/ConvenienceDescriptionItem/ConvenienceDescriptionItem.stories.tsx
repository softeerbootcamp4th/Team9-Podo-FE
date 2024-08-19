import React from "react";
import ConvenienceDescriptionItem from "./ConvenienceDescriptionItem";
import { convenienceInfoData } from "../../../../constants/InfoData";

export default {
  component: ConvenienceDescriptionItem,
  title: "main/Info/ConvenienceDescriptionItem",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Main = {
  args: {
    title: convenienceInfoData[0].title,
    description: convenienceInfoData[0].description,
    img: convenienceInfoData[0].image,
  },
};

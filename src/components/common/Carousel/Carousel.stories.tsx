import React from "react";
import { fn } from "@storybook/test";
import Carousel from "./Carousel";
import { outsideInfoData } from "../../../constants/InfoData";
import OutsideDescriptionItem from "../../mainPage/InfoScreen/OutsideDescriptionItem/OutsideDescriptionItem";

export default {
  component: Carousel,
  title: "main/Carousel",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {},
};

export const Main = {
  args: {
    items: outsideInfoData.map(({ key, title, content, image }) => {
      return (
        <OutsideDescriptionItem
          key={key}
          title={title}
          description={content}
          img={image}
        />
      );
    }),
  },
};

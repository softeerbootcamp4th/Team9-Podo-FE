import React from "react";
import DriveDescriptionItem from "./DriveDescriptionItem";
import { driveInfoData } from "../../../../constants/InfoData";

export default {
  component: DriveDescriptionItem,
  title: "main/Info/DriveDescriptionItem",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export const Main = {
  args: {
    title: driveInfoData[0].title,
    img: driveInfoData[0].image,
  },
};

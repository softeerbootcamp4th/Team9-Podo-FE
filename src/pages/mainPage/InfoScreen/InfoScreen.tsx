import React from "react";
import OutsideSection from "./OutsideSection";
import InsideSection from "./InsideSection";
import VideoSection from "./VideoSection";
import DriveSection from "./DriveSection";
import ConvenienceSection from "./ConvenienceSection";

const InfoScreen = () => {
  return (
    <div>
      <VideoSection />
      <OutsideSection />
      <DriveSection />
      <ConvenienceSection />
    </div>
  );
};

export default InfoScreen;

import React from "react";
import OutsideSection from "./OutsideSection";
import InsideSection from "./InsideSection";
import VideoSection from "./VideoSection";
import DriveSection from "./DriveSection";

const InfoScreen = () => {
  return (
    <div>
      <VideoSection />
      <OutsideSection />
      <DriveSection />
    </div>
  );
};

export default InfoScreen;

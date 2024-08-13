import React from "react";
import OutsideSection from "./OutsideSection";
import InsideSection from "./InsideSection";
import VideoSection from "./VideoSection";
import DriveSection from "./DriveSection";
import ConvenienceSection from "./ConvenienceSection";
import ColorSection from "./ColorSection";
import PerformanceSection from "./PerformanceSection";

const InfoScreen = () => {
  return (
    <div>
      <VideoSection />
      <OutsideSection />
      <DriveSection />
      <ConvenienceSection />
      <ColorSection />
      <PerformanceSection />
    </div>
  );
};

export default InfoScreen;

import React from "react";
import OutsideSection from "./OutsideSection";
import InsideSection from "./InsideSection";
import VideoSection from "./VideoSection";
import ColorSection from "./ColorSection";
import PerformanceSection from "./PerformanceSection";

const InfoScreen = () => {
  return (
    <div>
      <VideoSection />
      <OutsideSection />
      <ColorSection />
      <PerformanceSection />
    </div>
  );
};

export default InfoScreen;

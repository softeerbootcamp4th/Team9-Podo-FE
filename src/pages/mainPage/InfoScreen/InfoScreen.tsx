import React, { ForwardedRef, forwardRef } from "react";
import OutsideSection from "./OutsideSection";
import InsideSection from "./InsideSection";
import VideoSection from "./VideoSection";
import DriveSection from "./DriveSection";
import ConvenienceSection from "./ConvenienceSection";
import ColorSection from "./ColorSection";
import PerformanceSection from "./PerformanceSection";

const InfoScreen = (
  props: React.HTMLProps<HTMLDivElement>,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <div ref={ref}>
      <VideoSection />
      <OutsideSection />
      <InsideSection />
      <DriveSection />
      <ConvenienceSection />
      <ColorSection />
      <PerformanceSection />
    </div>
  );
};

export default forwardRef(InfoScreen);

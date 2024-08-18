import React, { ForwardedRef, forwardRef } from "react";
import OutsideSection from "./OutsideSection/OutsideSection";
import InsideSection from "./InsideSection";
import VideoSection from "./VideoSection";
import DriveSection from "./DriveSection/DriveSection";
import ConvenienceSection from "./ConvenienceSection/ConvenienceSection";
import ColorSection from "./ColorSection/ColorSection";
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

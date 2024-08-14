import React, { useEffect, useRef, useState } from "react";
import DriveDescriptionItem from "../../../components/mainPage/InfoScreen/DriveDescriptionItem";
import { driveInfoData } from "../../../constants/InfoData";
import useInView from "../../../hooks/useInView";

const animationDelay = {
  0: "delay-0",
  1: "delay-[200ms]",
  2: "delay-[400ms]",
  3: "delay-[100ms]",
  4: "delay-[300ms]",
  5: "delay-[500ms]",
};

const DriveSection = () => {
  const { isInView, elementRef } = useInView<HTMLDivElement>(0.9);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div
      ref={elementRef}
      className="flex h-screen w-screen snap-start flex-col items-center bg-white flex-center"
    >
      <div className="mb-600 h-[2.75rem] rounded-[6.25rem] px-500 py-300 font-kia-signature text-title-4 text-gray-400 flex-center gradient-border">
        드라이빙
      </div>
      <div className="mb-12 font-kia-signature-bold text-title-1 text-gray-950">
        차급을 뛰어 넘는 주행 경험
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-[2rem] gap-y-[3.75rem]">
        {driveInfoData.map(({ key, title, image }, index) => (
          <DriveDescriptionItem
            key={key}
            title={title}
            img={image}
            tailwind={`${isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"} transition-all duration-[200ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)] origin-bottom-right ${animationDelay[index as keyof typeof animationDelay]} `}
          />
        ))}
      </div>
    </div>
  );
};

export default DriveSection;

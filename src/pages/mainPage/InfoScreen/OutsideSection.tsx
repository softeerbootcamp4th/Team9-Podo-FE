import React, { useEffect, useRef, useState } from "react";
import OutsideDescriptionItem from "../../../components/mainPage/InfoScreen/OutsideDescriptionItem";
import OutsideInfo from "../../../assets/images/OutsideInfo.png";
import { outsideInfoData } from "../../../constants/InfoData";
import Carousel from "../../../components/common/Carousel/Carousel";
import useInView from "../../../hooks/useInView";

const OutsideSection = () => {
  const { isInView, elementRef } = useInView<HTMLImageElement>(0.9);

  return (
    <div className="flex w-screen snap-start flex-col items-center bg-white">
      <div className="mb-600 mt-[5rem] h-[2.75rem] rounded-[6.25rem] px-500 py-300 font-kia-signature text-title-4 text-gray-400 flex-center gradient-border">
        외장
      </div>
      <div className="mb-12 font-kia-signature-bold text-title-1 text-gray-950">
        역동적인 스타일에 미래적 감성을 더하다
      </div>
      <img
        ref={elementRef}
        src={OutsideInfo}
        alt="OutsideImage"
        className={`h-screen w-screen snap-start ${isInView ? "scale-100" : "scale-90"} mb- transition-transform duration-200`}
      />
      <div className="pb-[8rem] pt-[5rem]">
        <Carousel
          items={outsideInfoData.map(({ key, title, content, image }) => {
            return (
              <OutsideDescriptionItem
                key={key}
                title={title}
                description={content}
                img={image}
              />
            );
          })}
        />
      </div>
    </div>
  );
};

export default OutsideSection;

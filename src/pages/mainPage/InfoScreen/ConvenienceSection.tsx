import React, { useEffect, useRef, useState } from "react";
import ConvenienceDescriptionItem from "../../../components/mainPage/InfoScreen/ConvenienceDescriptionItem";
import { convenienceInfoData } from "../../../constants/InfoData";
import useInView from "../../../hooks/useInView";

const ConvenienceSection = () => {
  const { isInView, elementRef } = useInView<HTMLDivElement>(0.9);

  return (
    <div
      ref={elementRef}
      className="flex h-screen w-screen snap-start items-center overflow-scroll bg-white"
    >
      <div
        className={`flex h-[7.625rem] w-1/2 shrink-0 flex-col items-center ${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-[1000ms]`}
      >
        <div className="flex flex-col gap-600">
          <div className="h-[2.75rem] w-fit shrink-0 self-start rounded-[6.25rem] px-500 py-300 font-kia-signature text-title-4 text-gray-400 flex-center gradient-border">
            편의
          </div>
          <div className="mb-12 shrink-0 font-kia-signature-bold text-title-1 text-gray-950">
            더 편리하고 쉬워진 Car Life
          </div>
        </div>
      </div>
      <div className="flex gap-1000">
        {convenienceInfoData.map(
          ({ key, title, image, description }, index) => (
            <ConvenienceDescriptionItem
              key={key}
              title={title}
              img={image}
              description={description}
              tailwind={`${isInView ? "translate-x-0" : "translate-x-3/4"} transition-all ease-linear duration-200 `}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default ConvenienceSection;

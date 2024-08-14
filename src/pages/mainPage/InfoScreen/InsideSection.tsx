import React from "react";
import Guide from "../../../components/mainPage/InfoScreen/Guide";
import Interior from "../../../assets/images/Interior.png";
import useInView from "../../../hooks/useInView";

const InsideSection = () => {
  const { isInView, elementRef } = useInView<HTMLDivElement>(0.9);

  return (
    <div className="relative flex w-screen snap-start flex-col bg-white">
      <div className="my-12 ml-52 flex flex-col gap-600">
        <div className="h-[2.75rem] w-fit shrink-0 self-start rounded-[6.25rem] px-500 py-300 font-kia-signature text-title-4 text-gray-400 flex-center gradient-border">
          내장
        </div>
        <div className="shrink-0 font-kia-signature-bold text-title-1 text-gray-950">
          하이엔드 감성의 차별화된 고급스러움
        </div>
      </div>
      <div className="relative h-screen w-screen">
        <img
          src={Interior}
          alt="interior"
          className="absolute top-0 h-screen w-screen snap-start object-cover"
        />
        <Guide
          ref={elementRef}
          tailwind={`${isInView ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
        />
      </div>
    </div>
  );
};

export default InsideSection;

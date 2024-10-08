import React from "react";
import InsideGuide from "./InsideGuide";
import Interior from "../../../../../common/assets/images/Interior.png?as=webp";

const InsideSection = () => {
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
          alt="셀토스 내부 뷰"
          className="absolute top-0 h-screen w-screen snap-start object-cover"
        />
        <InsideGuide />
      </div>
    </div>
  );
};

export default InsideSection;

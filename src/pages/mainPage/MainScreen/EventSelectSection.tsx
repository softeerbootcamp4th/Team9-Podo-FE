import React from "react";
import EventSelectOptions from "../../../components/mainPage/MainScreen/EventSelectOptions/EventSelectOptions";
import e1Gift from "../../../assets/images/e1Gift.png";
import e2Gift from "../../../assets/images/e2Gift.png";
import Glow from "../../../components/common/Glow/Glow";

const EventSelectSection = () => {
  return (
    <>
      <div className="flex-co relative h-screen w-screen flex-center">
        <div className="-z-10">
          {/* z-index 정리 필요 */}
          <Glow />
        </div>
        <div
          className="absolute top-24 flex w-[36.75rem] items-center justify-center rounded-full p-[1px] font-kia-signature-bold text-title-4 text-gray-50"
          style={{
            background:
              "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
          }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-900 px-10 py-6 flex-center">
            <p className="font-kia-signature-bold text-title-2 text-glow-white">
              The 2025 셀토스 출시 이벤트
            </p>
          </div>
        </div>
        <div className="h-full w-full flex-center">
          <EventSelectOptions
            title="event 1."
            description={`매일 선착순 100명! \n퀴즈 풀고 스타벅스 커피 받아가자!`}
            img={e1Gift}
            buttonInfo={{ size: "small", isEnabled: true, onClick: () => {} }}
          />
          <EventSelectOptions
            title="event 2."
            description={`내 운전자 유형에 맞는 셀토스 라이프스타일 추천받고,\n 시그니엘 숙박권 당첨의 기회!`}
            img={e2Gift}
            buttonInfo={{ size: "small", isEnabled: true, onClick: () => {} }}
          />
        </div>
      </div>
    </>
  );
};

export default EventSelectSection;

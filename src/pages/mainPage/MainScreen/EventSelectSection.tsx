import React from "react";
import EventSelectOptions from "../../../components/mainPage/MainScreen/EventSelectOptions/EventSelectOptions";
import e1Gift from "../../../assets/images/e1Gift.png";
import e2Gift from "../../../assets/images/e2Gift.png";
import Glow from "../../../components/common/Glow/Glow";

const EventSelectSection = () => {
  return (
    <>
      <div className="flex-co relative h-screen w-screen flex-center">
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

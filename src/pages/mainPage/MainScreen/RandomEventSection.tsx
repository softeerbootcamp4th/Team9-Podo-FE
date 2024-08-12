import React, { forwardRef } from "react";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import EventFooter from "../../../components/mainPage/MainScreen/EventFooter";

const RandomEventSection = forwardRef<HTMLDivElement>((props, ref) => {
  const eventData = {
    title: "Event 2.",
    description: `내 운전자 유형에 맞는 셀토스 라이프스타일\n추천받고 경품 응모하기`,
  };

  return (
    <div
      className="h-screen w-screen snap-start flex-col flex-center"
      ref={ref}
    >
      <EventHeader
        title={eventData.title}
        description={eventData.description}
      />
      <img />
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </div>
  );
});

export default RandomEventSection;

import React, { forwardRef } from "react";
import Timer from "./Timer";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import EventFooter from "../../../components/mainPage/MainScreen/EventFooter";

const FCFSEventSection = forwardRef<HTMLDivElement>((props, ref) => {
  const eventData = {
    title: "Event 1.",
    description: `소형 SUV 부문 압도적 판매량 1위!\nNo.1 셀토스가 매일 1시 선착순 100명에게 스타벅스 커피를 쏩니다!`,
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
      <Timer />
      <img />
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </div>
  );
});

export default FCFSEventSection;

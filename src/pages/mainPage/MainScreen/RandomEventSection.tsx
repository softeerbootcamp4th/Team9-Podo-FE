import React, { forwardRef } from "react";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import EventFooter from "../../../components/mainPage/MainScreen/EventFooter";

const RandomEventSection = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div
      className="h-screen w-screen snap-start flex-col bg-pink-200 flex-center"
      ref={ref}
    >
      <EventHeader title="event" description="desc" />
      <img />
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </div>
  );
});

export default RandomEventSection;

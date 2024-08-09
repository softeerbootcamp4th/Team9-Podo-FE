import React from "react";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import EventFooter from "../../../components/mainPage/MainScreen/EventFooter";

const RandomEventSection = () => {
  return (
    <div className="h-screen w-screen snap-start flex-col bg-pink-200 flex-center">
      <EventHeader title="event" description="desc" />
      <img />
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </div>
  );
};

export default RandomEventSection;

import React from "react";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import EventFooter from "../../../components/mainPage/MainScreen/EventFooter";

const RandomEventSection = () => {
  return (
    <>
      <EventHeader title="event" description="desc" />
      <img />
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </>
  );
};

export default RandomEventSection;

import React from "react";
import Timer from "./Timer";
import EventHeader from "../../../components/mainPage/MainScreen/EventHeader";
import EventFooter from "../../../components/mainPage/MainScreen/EventFooter";

const FCFSEventSection = () => {
  return (
    <>
      <EventHeader title="event" description="desc" />
      <Timer />
      <img />
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </>
  );
};

export default FCFSEventSection;

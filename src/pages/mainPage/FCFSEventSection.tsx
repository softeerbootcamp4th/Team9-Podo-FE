import React from "react";
import Timer from "./Timer";
import EventHeader from "./EventHeader";
import EventFooter from "./EventFooter";

const FCFSEventSection = () => {
  return (
    <>
      <EventHeader title="event" description="desc" />
      <Timer />
      <img>coffee img</img>
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </>
  );
};

export default FCFSEventSection;

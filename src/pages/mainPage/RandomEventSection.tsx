import React from "react";
import EventHeader from "./EventHeader";
import EventFooter from "./EventFooter";

const RandomEventSection = () => {
  return (
    <>
      <EventHeader title="event" description="desc" />
      <img>img</img>
      <EventFooter
        eventInfo={{ title: "title", description: "des", option: Object }}
        buttonInfo={{ size: "small", onClick: () => {}, isEnabled: true }}
      />
    </>
  );
};

export default RandomEventSection;

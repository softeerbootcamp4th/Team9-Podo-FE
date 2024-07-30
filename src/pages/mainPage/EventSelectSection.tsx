import React from "react";
import EventSelectOptions from "./EventSelectOptions";

const EventSelectSection = () => {
  return (
    <>
      <div>EventSelectTitle</div>;
      <EventSelectOptions
        title="event"
        description="des"
        img="url"
        buttonInfo={{ size: "small", onClick: () => {} }}
      />
      <EventSelectOptions
        title="event"
        description="des"
        img="url"
        buttonInfo={{ size: "small", onClick: () => {} }}
      />
    </>
  );
};

export default EventSelectSection;

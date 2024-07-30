import React from "react";
import EventSelectSection from "./EventSelectSection";
import FCFSEventSection from "./FCFSEventSection";
import RandomEventSection from "./RandomEventSection";

const MainScreen = () => {
  return (
    <>
      <EventSelectSection />
      <img></img>
      <FCFSEventSection />
      <RandomEventSection />
    </>
  );
};

export default MainScreen;

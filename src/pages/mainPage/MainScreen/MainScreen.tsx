import React from "react";
import EventSelectSection from "./EventSelectSection";
import FCFSEventSection from "./FCFSEventSection";
import RandomEventSection from "./RandomEventSection";

const MainScreen = () => {
  return (
    <>
      <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth">
        <EventSelectSection />
        <img />
        <FCFSEventSection />
        <RandomEventSection />
      </div>
    </>
  );
};

export default MainScreen;

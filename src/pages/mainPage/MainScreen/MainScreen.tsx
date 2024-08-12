import React, { useRef } from "react";
import EventSelectSection from "./EventSelectSection";
import GlowBackground from "../../../components/common/GlowBackground/GlowBackground";
import FCFSEventSection from "./FCFSEventSection";
import RandomEventSection from "./RandomEventSection";

const MainScreen = () => {
  const FCFSRef = useRef<HTMLDivElement>(null);
  const RandomRef = useRef<HTMLDivElement>(null);

  const onFCFSClick = () => {
    FCFSRef.current &&
      FCFSRef.current.scrollIntoView({
        behavior: "smooth",
      });
  };
  const onRandomClick = () => {
    RandomRef.current &&
      RandomRef.current.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <>
      <GlowBackground />
      <EventSelectSection
        onFCFSClick={onFCFSClick}
        onRandomClick={onRandomClick}
      />
      <FCFSEventSection ref={FCFSRef}></FCFSEventSection>
      <RandomEventSection ref={RandomRef}></RandomEventSection>
    </>
  );
};

export default MainScreen;

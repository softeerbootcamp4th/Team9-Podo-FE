import React from "react";
import { Outlet } from "react-router";
import HintSection from "./HintSection";

const FCFSEventPage = () => {
  return (
    <div>
      <Outlet /> {/*QuizSection*/}
      <HintSection />
    </div>
  );
};

export default FCFSEventPage;

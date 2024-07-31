import React from "react";
import { Outlet } from "react-router";
import FCFSHintSection from "./FCFSHintSection";
import FCFSQuizSection from "./FCFSQuizSection";

const FCFSEventPage = () => {
  return (
    <div>
      {/* <FCFSQuizSection /> */}
      <FCFSHintSection />
    </div>
  );
};

export default FCFSEventPage;

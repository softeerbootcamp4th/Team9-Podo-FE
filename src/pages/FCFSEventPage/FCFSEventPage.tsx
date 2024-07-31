import React from "react";
import { Outlet } from "react-router";
import FCFSHintSection from "./FCFSHintSection";

const FCFSEventPage = () => {
  return (
    <div>
      <Outlet /> {/*FCFSQuizSection*/}
      <FCFSHintSection />
    </div>
  );
};

export default FCFSEventPage;

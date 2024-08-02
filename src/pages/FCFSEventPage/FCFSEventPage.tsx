import React from "react";
import { Outlet } from "react-router";
import FCFSHintSection from "./FCFSHintSection";
import FCFSQuizSection from "./FCFSQuizSection";
import { quizInfo } from "../../mocks/data/FCFSEvent";

const FCFSEventPage = () => {
  return (
    <div>
      {/* <FCFSQuizSection quizInfo={quizInfo} /> */}
      <FCFSHintSection isShow={true} />
    </div>
  );
};

export default FCFSEventPage;

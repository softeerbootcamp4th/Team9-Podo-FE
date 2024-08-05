import React from "react";
import FCFSHintSection from "./FCFSHintSection";
import FCFSQuizSection from "./FCFSQuizSection";

const FCFSEventPage = () => {
  return (
    <div>
      <FCFSQuizSection quizInfo={quizInfo} />
      <FCFSHintSection isShow={true} />
    </div>
  );
};

export default FCFSEventPage;

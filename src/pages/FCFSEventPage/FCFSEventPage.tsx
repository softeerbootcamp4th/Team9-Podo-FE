import React from "react";
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

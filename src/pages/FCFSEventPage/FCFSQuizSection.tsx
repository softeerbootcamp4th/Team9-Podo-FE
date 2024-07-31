import React from "react";
import { QuizInfo } from "../../types/FCFSEvent";

const FCFSQuizSection = ({ quizInfo }: QuizInfo) => {
  return (
    <>
      <header role="banner">오늘의 퀴즈</header>
      <h2>{quizInfo.question}</h2>
      {/* <ol>
        {optionList.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol> */}
      <button>Submit</button>
      <div>error toast</div>
    </>
  );
};

export default FCFSQuizSection;

import React from "react";

interface FCFSQuizInterface {
  question: String;
  optionList: Array<string>;
}

const FCFSQuizSection = ({ question, optionList }: FCFSQuizInterface) => {
  return (
    <div>
      <div>오늘의 퀴즈</div>
      <p>{question}</p>
      <ol>
        {optionList.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ol>
      <button>Submit</button>
      <div>error toast</div>
    </div>
  );
};

export default FCFSQuizSection;

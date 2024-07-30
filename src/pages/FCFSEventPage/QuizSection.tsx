import React from "react";

interface QuizInterface {
  question: String;
  optionList: Array<String>;
}

const QuizSection = ({ question, optionList }: QuizInterface) => {
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

export default QuizSection;

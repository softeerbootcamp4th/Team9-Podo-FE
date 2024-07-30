import React from "react";

interface RandomQuizInterface {
  background: string;
  question: string;
  optionList: Array<string>;
}

const RandomQuizSection = ({
  background,
  question,
  optionList,
}: RandomQuizInterface) => {
  return (
    <div>
      <img src={background} alt="" />
      <p>{question}</p>
      <div>
        {optionList.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default RandomQuizSection;

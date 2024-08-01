import React, { MouseEventHandler, useState } from "react";
import Option from "../../components/randomEventPage/Option/Option";
import { useOutletContext } from "react-router";

interface RandomQuizSectionInterface {
  quizInfo: QuizInfoInterface;
  onClick: Function;
}

interface QuizInfoInterface {
  background: string;
  question: string;
  optionList: Array<OptionInterface>;
}

interface OptionInterface {
  label: string;
  content: string;
}

const RandomQuizSection = () => {
  const { quizInfo, onClick } = useOutletContext<RandomQuizSectionInterface>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const onClickHandler = async (index: number) => {
    setSelectedIndex(index);
    await onClick();
    setSelectedIndex(null);
  };

  return (
    <div role="region" className="flex flex-col items-center">
      <p>{quizInfo.question}</p>
      <div className="flex flex-row">
        {quizInfo.optionList.map((option, index) => (
          <Option
            key={index}
            label={option.label}
            content={option.content}
            state={
              selectedIndex === index
                ? "selected"
                : selectedIndex === null
                  ? "default"
                  : "unselected"
            }
            onClick={() => onClickHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RandomQuizSection;

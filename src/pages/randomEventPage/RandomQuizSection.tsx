import React, { useEffect, useState } from "react";
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

const ANIMATION_CLASS = {
  next: "opacity-0 translate-x-[40rem]",
  current: "",
  prev: "opacity-0 -translate-x-[40rem]",
};

const RandomQuizSection = () => {
  const { quizInfo, onClick } = useOutletContext<RandomQuizSectionInterface>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState("");

  const onClickHandler = async (index: number) => {
    setAnimationClass(ANIMATION_CLASS.prev);
    setSelectedIndex(index);

    await onClick(); //페이지 이동
  };

  useEffect(() => {
    setSelectedIndex(null);
    setAnimationClass(ANIMATION_CLASS.next);
    const timeout = setTimeout(() => {
      setAnimationClass(ANIMATION_CLASS.current);
    }, 200);

    return () => clearTimeout(timeout);
  }, [quizInfo]);

  return (
    <div
      role="region"
      className={`animate-fadeNextPage flex h-full flex-col items-center justify-evenly transition-all duration-[500ms] ease-in-out ${animationClass}`}
    >
      <p className="w-[43rem] break-keep text-center font-kia-signature text-title-2 text-white">
        {quizInfo.question}
      </p>
      <div className="flex flex-row gap-8">
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

import React from "react";
import { useParams } from "react-router";

interface RandomQuizInterface {
  background: string;
  question: string;
  optionList: Array<string>;
}

const RandomQuizSection = () => {
  const { quizIndex } = useParams();
  const quizList: Array<RandomQuizInterface> = [
    {
      background: "path/to/image1.jpg",
      question: "What is 2+2?",
      optionList: ["3", "4", "5", "6"],
    },
    {
      background: "path/to/image2.jpg",
      question: "What is the capital of France?",
      optionList: ["London", "Berlin", "Madrid", "Paris"],
    },
    {
      background: "path/to/image1.jpg",
      question: "What is 2+2?",
      optionList: ["3", "4", "5", "6"],
    },
    {
      background: "path/to/image2.jpg",
      question: "What is the capital of France?",
      optionList: ["London", "Berlin", "Madrid", "Paris"],
    },
  ];
  const index = quizIndex ? parseInt(quizIndex, 10) : 0;
  const quiz = quizList[index];

  return (
    <div>
      <img src={quiz.background} alt="" />
      <p>{quiz.question}</p>
      <div>
        {quiz.optionList.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default RandomQuizSection;

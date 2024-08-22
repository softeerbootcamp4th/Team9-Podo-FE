import { MouseEventHandler } from "react";

export interface OptionInterface {
  label: string;
  content: string;
  state: "default" | "selected" | "unselected";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface AnswerInterface {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

export interface RandomQuizSectionInterface {
  quizInfo: QuizInfoInterface;
  currentIndex: number;
  answer: AnswerInterface;
  onClick: Function;
}

export interface QuizInfoInterface {
  background: string;
  question: string;
  optionList: Array<OptionInterface>;
}

export interface OptionInterface {
  label: string;
  content: string;
}

export interface RandomQuizResponseInterface {
  isSuccess: boolean;
  code: number;
  message: string;
  result: {
    resultId: number;
    result: string;
    type: string;
    description: string;
    scenarioList: {
      title: string;
      subtitle: string;
      image: string;
    }[];
  };
}

export interface DescriptionInterface {
  content: string;
  highlighted: boolean;
}

export interface RandomMainInterface {
  resultTypeId: number;
  description: Array<DescriptionInterface>;
  scenarioList: Array<ScenarioInterface>;
}

export interface ScenarioInterface {
  image: string;
  title: string;
  subtitle: string;
}

export interface SharedLinkInterface {
  uniqueLink: string;
}

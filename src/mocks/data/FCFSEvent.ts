import { QuizInfo, QuizResult } from "../../types/FCFSEvent";

export const quizInfo: QuizInfo = {
  question:
    "시그니처 그래비티 트림에서만 만나볼 수 있는 특별한 인테리어 컬러는?",
  choice1: "다이나믹 레드",
  choice2: "딥 오션 블루",
  choice3: "미드나잇 그린",
  choice4: "스페이스 블랙",
  answer: "1",
};

export const quizSuccessResult: QuizResult = {
  success: true,
  name: "string",
  phoneNum: "01011111111",
  grade: 6,
};

export const quizFailResult = {
  response: "failed",
};

export const FCFSSuccessResult = (data: QuizInfo | QuizResult) => {
  return {
    isSuccess: true,
    code: 0,
    message: "string",
    result: data,
  };
};

import { FCFSResult, QuizInfo } from "../types/FCFSEvent";

export const fetchFCFSQuizInfo = async (): Promise<QuizInfo> => {
  const response = await fetch("http://localhost:5000/v1/quiz");
  return await response.json();
};

export const fetchFCFSResult = async (): Promise<FCFSResult> => {
  const response = await fetch("http://localhost:5000/v1/quiz", {
    method: "POST",
  });
  return await response.json();
};

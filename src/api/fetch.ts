import { QuizInfo } from "../types/FCFSEvent";

export const fetchFCFSQuizInfo = async (): Promise<QuizInfo> => {
  const response = await fetch("http://localhost:5000/v1/quiz");
  return await response.json();
};

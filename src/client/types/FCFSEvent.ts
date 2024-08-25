export interface QuizInfo {
  question: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
  answer: string;
}

export interface QuizResult {
  success: boolean;
  name: string;
  phoneNum: string;
  grade: number;
}

export type ErrorToastKey = "WRONG_ANSWER" | "NO_ANSWER" | "DUPLICATE_APPLY";

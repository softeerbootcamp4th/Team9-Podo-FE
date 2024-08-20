import Cookies from "js-cookie";
import {
  AnswerInterface,
  RandomQuizResponseInterface,
} from "../types/RandomEvent";

export const postEvent2Answers = async (
  answers: AnswerInterface,
): Promise<RandomQuizResponseInterface | null> => {
  try {
    const response = await fetch("/lots/type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: decodeURI(Cookies.get("auth") || ""),
      },
      body: JSON.stringify(answers),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting answers:", error);
    return null;
  }
};

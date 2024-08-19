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
        Authorization:
          "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..Wv4DNiAP2hL36vDs.AOwY0A-a8JH6lJWR9T_P3pTgB5o8JaMUwrehYQjpCD1uFhs3aFoWJ-wDLgnX5Jx_YT6dHfJPIXbpG3Oycammh6VQH97U2UtNChPr_t3F9ILqbXAaBcMoWYUx0YqtbgVbOybS6FTMDp7QGhXRZNzXz06gQi46AqbTPOTnVUDICYHHqRq_3efphiRNjTu4JP2OFKq9jIunoLNHCcPZFFidVBafs9R4Z9nEPD-W__uuZOuG111wD4vqjBdshkxs46Y.UyhO03YoDwLvAMmPXHV70g",
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

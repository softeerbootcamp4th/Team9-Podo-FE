import { http, HttpResponse } from "msw";
import { quizInfo } from "../data/FCFSEvent";

const getQuizInfo = http.get("http://localhost:5000/v1/quiz", () => {
  // ...and respond to them using this JSON response.
  return HttpResponse.json(quizInfo);
});

export default [getQuizInfo];

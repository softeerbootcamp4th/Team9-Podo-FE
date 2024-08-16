import { http, HttpResponse } from "msw";
import {
  FCFSSuccessResult,
  quizInfo,
  quizSuccessResult,
} from "../data/FCFSEvent";

const getQuizInfo = http.get("/v1/quiz", () => {
  return HttpResponse.json(FCFSSuccessResult(quizInfo));
});

const getFCFSResult = http.post("/v1/quiz", () => {
  return HttpResponse.json(FCFSSuccessResult(quizSuccessResult));
});

export default [getQuizInfo, getFCFSResult];

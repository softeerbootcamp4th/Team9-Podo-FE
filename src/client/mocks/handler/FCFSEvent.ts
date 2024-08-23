import { http, HttpResponse } from "msw";
import {
  FCFSSuccessResult,
  quizInfo,
  quizSuccessResult,
} from "../data/FCFSEvent";

const getQuizInfo = http.get("/undefined/v1/quiz", () => {
  return HttpResponse.json(FCFSSuccessResult(quizInfo));
});

const getFCFSResult = http.post("/undefined/v1/arrival/application", () => {
  return HttpResponse.json(FCFSSuccessResult(quizSuccessResult));
});

export default [getQuizInfo, getFCFSResult];

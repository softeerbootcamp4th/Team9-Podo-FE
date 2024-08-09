import { http, HttpResponse } from "msw";
import { FCFSFailResult, FCFSSuccessResult, quizInfo } from "../data/FCFSEvent";

const getQuizInfo = http.get("/v1/quiz", () => {
  return HttpResponse.json(quizInfo);
});

const getFCFSResult = http.post("/v1/quiz", () => {
  return HttpResponse.json(FCFSSuccessResult);
});

export default [getQuizInfo, getFCFSResult];

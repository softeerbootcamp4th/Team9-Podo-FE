import { http, HttpResponse } from "msw";
import { FCFSFailResult, FCFSSuccessResult, quizInfo } from "../data/FCFSEvent";

const getQuizInfo = http.get("http://localhost:5000/v1/quiz", () => {
  return HttpResponse.json(quizInfo);
});

const getFCFSResult = http.post("http://localhost:5000/v1/quiz", () => {
  return HttpResponse.json(FCFSSuccessResult);
});

export default [getQuizInfo, getFCFSResult];

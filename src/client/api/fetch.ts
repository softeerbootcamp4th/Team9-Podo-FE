import { ApiResponse } from "../types/api";
import {
  AuthResult,
  PhoneAuthCheckForm,
  PhoneAuthRequestForm,
  PhoneAuthVerifyResult,
} from "../types/AuthModal";
import { QuizInfo, QuizResult } from "../types/FCFSEvent";
import { WordListResponse } from "../types/InfoScreen";
import { SharedLinkInterface } from "../types/RandomEvent";

/**
 * 선착순 퀴즈 정보를 가져오는 api
 * @returns
 */
export const fetchFCFSQuizInfo = async (): Promise<ApiResponse<QuizInfo>> => {
  const response = await fetch("/v1/quiz");

  return await response.json();
};

/**
 * 선착순 퀴즈 결과를 가져오는 api
 * @returns
 */
export const fetchFCFSResult = async (): Promise<ApiResponse<QuizResult>> => {
  const response = await fetch("/v1/quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..Wv4DNiAP2hL36vDs.AOwY0A-a8JH6lJWR9T_P3pTgB5o8JaMUwrehYQjpCD1uFhs3aFoWJ-wDLgnX5Jx_YT6dHfJPIXbpG3Oycammh6VQH97U2UtNChPr_t3F9ILqbXAaBcMoWYUx0YqtbgVbOybS6FTMDp7QGhXRZNzXz06gQi46AqbTPOTnVUDICYHHqRq_3efphiRNjTu4JP2OFKq9jIunoLNHCcPZFFidVBafs9R4Z9nEPD-W__uuZOuG111wD4vqjBdshkxs46Y.UyhO03YoDwLvAMmPXHV70g",
    },
  });

  return await response.json();
};

/**
 * 휴대폰 인증 요청을 보내는 api
 * @param {PhoneAuthRequestForm} phoneAuthRequestForm - 이름, 전화번호 정보가 들어간 객체
 * @returns
 */
export const postPhoneAuthRequest = async (
  phoneAuthRequestForm: PhoneAuthRequestForm,
): Promise<AuthResult> => {
  const response = await fetch("/verification/claim", {
    method: "POST",
    body: JSON.stringify(phoneAuthRequestForm),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

/**
 * 회원 인증하는 api
 * @param {PhoneAuthCheckForm} phoneAuthCheckForm - 이름, 전화번호, 인증번호 정보가 들어간 객체
 * @returns
 */
export const postPhoneAuthCheckRequest = async (
  phoneAuthCheckForm: PhoneAuthCheckForm,
): Promise<PhoneAuthVerifyResult> => {
  const response = await fetch("/verification/check", {
    method: "POST",
    body: JSON.stringify(phoneAuthCheckForm),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

/**
 * wordCloud data를 가져오는 api
 * @returns
 */
export const fetchWordCloudData = async (): Promise<
  ApiResponse<WordListResponse>
> => {
  const response = await fetch("/lots/wordCloud");

  return await response.json();
};

/**
 * 기대평 등록 api
 * @returns
 */
export const postComment = async (
  comment: string,
): Promise<ApiResponse<any>> => {
  //any 수정 필요
  const response = await fetch("/v1/lots/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..mrgt15FIWG0uPVeH.1ZLiQXVRGvSLU4BbKNoSuBLxd0lcrnKz3XTTW90y0r8ePkwq6Ek9UxkAKGxc4cyx6ud5niEKtxs6qFoMy14JQP_D7zR9aRDTvNFrFaaPqks9jgTv8gtSuUHYrS325EwetswbNyO3TmAdxXJtBOqkiE3Se2iiJ87Jh9zt3BVAG00Qhyn4GIOeAHJvs8uWlPlo5StBP9KOz8RYUHXgl_cf6TP5RikXa9s45b2Io_o2MANGlkrdd3Cj4tw5MkoIuUg.mWOcxU8wsoosCBr6L0wLxA",
    },
    body: JSON.stringify({ comment: `${comment}` }),
  });

  return await response.json();
};

/**
 * 랜덤 이벤트 응모 후 공유 링크 가져오는 api
 * @returns
 */
export const postRandomResult = async (
  resultId: number,
): Promise<ApiResponse<SharedLinkInterface>> => {
  const response = await fetch("/v1/lots/application", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..Wv4DNiAP2hL36vDs.AOwY0A-a8JH6lJWR9T_P3pTgB5o8JaMUwrehYQjpCD1uFhs3aFoWJ-wDLgnX5Jx_YT6dHfJPIXbpG3Oycammh6VQH97U2UtNChPr_t3F9ILqbXAaBcMoWYUx0YqtbgVbOybS6FTMDp7QGhXRZNzXz06gQi46AqbTPOTnVUDICYHHqRq_3efphiRNjTu4JP2OFKq9jIunoLNHCcPZFFidVBafs9R4Z9nEPD-W__uuZOuG111wD4vqjBdshkxs46Y.UyhO03YoDwLvAMmPXHV70g",
    },
    body: JSON.stringify({ resultTypeId: resultId }),
  });

  return await response.json();
};

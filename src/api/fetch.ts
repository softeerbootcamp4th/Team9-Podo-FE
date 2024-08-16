import { ApiResponse } from "../types/api";
import {
  PhoneAuthCheckForm,
  PhoneAuthRequestForm,
  PhoneAuthVerifyResult,
} from "../types/AuthModal";
import { QuizInfo, QuizResult } from "../types/FCFSEvent";

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
): Promise<Object> => {
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

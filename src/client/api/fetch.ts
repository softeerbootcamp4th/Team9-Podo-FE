import Cookies from "js-cookie";
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
  const response = await fetch("/v1/quiz", {
    headers: {
      "Content-Type": "application/json",
      Authorization: decodeURI(Cookies.get("auth") || ""),
    },
  });

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
      Authorization: decodeURI(Cookies.get("auth") || ""),
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
      Authorization: decodeURI(Cookies.get("auth") || ""),
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
      Authorization: decodeURI(Cookies.get("auth") || ""),
    },
    body: JSON.stringify({ resultTypeId: resultId }),
  });

  return await response.json();
};

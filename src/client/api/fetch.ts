import Cookies from "js-cookie";
import { ApiResponse } from "../types/api";
import {
  PhoneAuthCheckForm,
  PhoneAuthRequestForm,
  TokenInfo,
} from "../types/AuthModal";
import { QuizInfo, QuizResult } from "../types/FCFSEvent";
import { WordListResponse } from "../types/InfoScreen";
import {
  AnswerInterface,
  RandomQuizResponseInterface,
  SharedLinkInterface,
} from "../types/RandomEvent";
import { HTTP_STATUS_CODE } from "../constants/api";
const RANDOM_URL = process.env.RANDOM_URL;
const FCFS_URL = process.env.FCFS_URL;

/**
 * 선착순 퀴즈 정보를 가져오는 api
 * @returns
 */
export const fetchFCFSQuizInfo = async () => {
  return await fetchInterceptor<QuizInfo>(FCFS_URL + "/v1/quiz", {
    headers: {
      "Content-Type": "application/json",
      Authorization: decodeURI(Cookies.get("auth") || ""),
    },
  });
};

/**
 * 선착순 퀴즈 결과를 가져오는 api
 * @returns
 */
export const fetchFCFSResult = async () => {
  return await fetchInterceptor<QuizResult>(
    FCFS_URL + "/v1/arrival/application",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: decodeURI(Cookies.get("auth") || ""),
      },
    },
  );
};

/**
 * 휴대폰 인증 요청을 보내는 api
 * @param {PhoneAuthRequestForm} phoneAuthRequestForm - 이름, 전화번호 정보가 들어간 객체
 * @returns
 */
export const postPhoneAuthRequest = async (
  phoneAuthRequestForm: PhoneAuthRequestForm,
) => {
  return await fetchInterceptor<string>(RANDOM_URL + "/verification/claim", {
    method: "POST",
    body: JSON.stringify(phoneAuthRequestForm),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * 회원 인증하는 api
 * @param {PhoneAuthCheckForm} phoneAuthCheckForm - 이름, 전화번호, 인증번호 정보가 들어간 객체
 * @returns
 */
export const postPhoneAuthCheckRequest = async (
  phoneAuthCheckForm: PhoneAuthCheckForm,
) => {
  return await fetchInterceptor<TokenInfo>(RANDOM_URL + "/verification/check", {
    method: "POST",
    body: JSON.stringify(phoneAuthCheckForm),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

/**
 * wordCloud data를 가져오는 api
 * @returns
 */
export const fetchWordCloudData = async () => {
  return await fetchInterceptor<WordListResponse>(
    RANDOM_URL + "/lots/wordCloud",
  );
};

/**
 * 기대평 등록 api
 * @returns
 */
export const postComment = async (comment: string) => {
  //any 수정 필요
  return await fetchInterceptor<any>(RANDOM_URL + "/v1/lots/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: decodeURI(Cookies.get("auth") || ""),
    },
    body: JSON.stringify({ comment: `${comment}` }),
  });
};

/**
 * 랜덤 이벤트 응모 후 공유 링크 가져오는 api
 * @returns
 */
export const postRandomResult = async (resultId: number) => {
  return await fetchInterceptor<SharedLinkInterface>(
    RANDOM_URL + "/v1/lots/application",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: decodeURI(Cookies.get("auth") || ""),
      },
      body: JSON.stringify({ resultTypeId: resultId }),
    },
  );
};

/**
 * 인증 토큰을 확인하고 갱신하는 api
 * @returns
 */
export const checkAndRefreshToken = async () => {
  return await fetchInterceptor<TokenInfo>(RANDOM_URL + "/v1/reissue", {
    method: "POST",
    headers: {
      Authorization: decodeURI(Cookies.get("auth") || ""),
    },
  });
};

export const fetchInterceptor = async <T>(
  url: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> => {
  const response = await fetch(url, options);
  const jsonResponse: ApiResponse<T> = await response.json();

  if (jsonResponse.code === HTTP_STATUS_CODE.UNAUTHORIZED) {
    throw new Error(jsonResponse.message);
  } else if (jsonResponse.code === HTTP_STATUS_CODE.NOT_FOUND) {
    throw new Error(jsonResponse.message);
  } else if (jsonResponse.code === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new Error(jsonResponse.message);
  }

  return jsonResponse;
};

export const postEvent2Answers = async (
  answers: AnswerInterface,
): Promise<RandomQuizResponseInterface | null> => {
  try {
    const response = await fetch(RANDOM_URL + "/lots/type", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

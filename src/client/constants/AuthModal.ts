import { ErrorToastKey } from "../types/AuthModal";

export const MESSAGE: Record<ErrorToastKey, string> = {
  AUTH_NUM_EXPRIES: "인증시간이 만료되었습니다.",
  AUTH_NUM_INCORRECT: "인증번호가 틀렸습니다. 다시 입력해주세요.",
};

export const AUTH_DELAY = 3 * 60 * 1000;

export const PERSONAL_INFO_NOTICE = [
  { key: "개인정보 수집 목적", value: "The 2025 셀토스 출시 Event" },
  { key: "개인정보 수집 항목", value: "성명, 휴대전화번호" },
  {
    key: "개인정보 보유 및 이용 기간",
    value: "이벤트 당첨자 발표 및 경품제공 후 즉시 파기",
  },
];

import { ErrorToastKey } from "../types/FCFSEvent";

export const NOTICE = {
  success: {
    header: "유의사항",
    content: [
      "당첨자분들께는 개별 연락이 갈 예정이며, 기프티콘 발송은 24시간 이내로 발송해드립니다.",
      "해당 기프티콘은 일부 매장에서는 사용이 제한될 수 있습니다.",
    ],
  },
  fail: {
    header: "",
    content: [
      "선착순 마감으로 인해 이번에는 선정되지 못하셨습니다.",
      "다음 기회를 기대해 주세요.",
    ],
  },
};

export const MESSAGE: Record<ErrorToastKey, string> = {
  NO_ANSWER: "정답을 선택해 주세요.",
  WRONG_ANSWER: "정답이 아닙니다. 다시 답변해주세요.",
  DUPLICATE_APPLY: "중복된 참여자 입니다.",
};

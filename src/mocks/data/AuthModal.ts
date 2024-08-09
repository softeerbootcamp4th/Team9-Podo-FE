import { PhoneAuthVerifyResult } from "../../types/AuthModal";

export const phoneAuthCheckResult: PhoneAuthVerifyResult = {
  isSuccess: true,
  code: 200,
  message: "요청에 성공했습니다.",
  result: {
    accessToken:
      "Bearer mockeyJlbmMiOiJBMjU2R0NNIiwiYWxnlyIn0..9OhMZWH54Txf0unu.91CJloJCRtZ1zV1Fo5CHFSNLaV8U8z8vlQazTUop9FXHOhHb8GWBIx_8C97YHFOXJBp-uN2bE9q895U-LOb9jEhsMChgEi36WNjUsM-4KFiEbHSSvCb5Ln1bvwkRoJSSMuWOR9nZjNthBGj0w5VYBPjRLN_QXL9bXMMuFUOio0w2JHq8pqYnVxBIkhWD-c.AzVa-m6RLQ",
    expireTime: 3600000,
  },
};

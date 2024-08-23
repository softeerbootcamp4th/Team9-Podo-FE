import { http, HttpResponse } from "msw";
import {
  phoneAuthCheckFailResult,
  phoneAuthCheckResult,
  reissueResult,
} from "../data/AuthModal";
import { PhoneAuthCheckForm } from "../../types/AuthModal";

const postPhoneAuthRequest = http.post("/undefined/verification/claim", () => {
  return HttpResponse.json({ success: true });
});

const postPhoneAuthCheck = http.post(
  "/undefined/verification/check",
  async ({ request }) => {
    const body = (await request.json()) as PhoneAuthCheckForm;
    if (body.verificationCode === "654321")
      return HttpResponse.json(phoneAuthCheckResult);
    else return HttpResponse.json(phoneAuthCheckFailResult);
  },
);

const reissueToken = http.post("/undefined/v1/reissue", () => {
  return HttpResponse.json(reissueResult);
});

export default [postPhoneAuthRequest, postPhoneAuthCheck, reissueToken];

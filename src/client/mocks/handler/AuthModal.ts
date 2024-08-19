import { http, HttpResponse } from "msw";
import { phoneAuthCheckResult } from "../data/AuthModal";

const postPhoneAuthRequest = http.post("/verification/claim", () => {
  return HttpResponse.json({ success: true });
});

const postPhoneAuthCheck = http.post("/verification/check", () => {
  return HttpResponse.json(phoneAuthCheckResult);
});

export default [postPhoneAuthRequest, postPhoneAuthCheck];

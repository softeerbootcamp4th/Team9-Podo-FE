export interface PhoneAuthRequestForm {
  name: string;
  phoneNum: string;
}

export interface PhoneAuthCheckForm extends PhoneAuthRequestForm {
  verificationCode: string;
}

export type ErrorToastKey = "AUTH_NUM_EXPRIES" | "AUTH_NUM_INCORRECT";

export interface PhoneAuthVerifyResult {
  isSuccess: boolean;
  code: number;
  message: string;
  result: TokenInfo;
}

export interface TokenInfo {
  accessToken: string;
  expireTime: number;
}

export interface AuthResult {
  isSuccess: boolean;
  code: number;
  message: string;
  result: string;
}

export interface PhoneAuthRequestForm {
  name: string;
  phoneNum: string;
}

export interface PhoneAuthCheckForm extends PhoneAuthRequestForm {
  verificationCode: string;
}

export interface PhoneAuthVerifyResult {
  isSuccess: boolean;
  code: number;
  message: string;
  result: TokenInfo;
}

interface TokenInfo {
  accessToken: string;
  expireTime: number;
}

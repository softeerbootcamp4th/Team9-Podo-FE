import { ChangeEvent } from "react";

export const phoneAutoHyphen = (event: ChangeEvent<HTMLInputElement>) => {
  event.target.value = event.target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

export const validatePhoneNumber = (
  phoneNum: string,
  animation: () => void,
) => {
  const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
  return phonePattern.test(phoneNum) ? true : (animation(), false);
};

export const verifyCodeCorrector = (event: ChangeEvent<HTMLInputElement>) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
};

export const validateverificationCode = (
  verificationCode: string,
  animation: () => void,
) => {
  const verificationCodePattern = /^\d{6}$/;
  return verificationCodePattern.test(verificationCode)
    ? true
    : (animation(), false);
};

export const validateName = (name: string, animation: () => void) => {
  return name.length !== 0 ? true : (animation(), false);
};

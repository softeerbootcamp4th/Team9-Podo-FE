import React, { MouseEvent, useContext, useState } from "react";
import {
  AUTH_DELAY,
  MESSAGE,
  PERSONAL_INFO_NOTICE,
} from "../../constants/AuthModal";
import Button from "../../components/common/Button/Button";
import { useLocation, useNavigate } from "react-router";
import useInputs from "../../hooks/useInputs";
import { validateName, verifyCodeCorrector } from "../../utils/auth";
import { ErrorToastKey, PhoneAuthCheckForm } from "../../types/AuthModal";
import {
  postPhoneAuthCheckRequest,
  postPhoneAuthRequest,
} from "../../api/fetch";
import {
  phoneAutoHyphen,
  validatePhoneNumber,
  validateverificationCode,
} from "../../utils/auth";
import Toast from "../../components/common/Toast/Toast";
import useAnimation from "../../hooks/useAnimation";
import { shakeHorizontal } from "../../styles/keyframes";
import { shakeInputOptions } from "../../styles/options";
import useTimer from "../../hooks/useTimer";
import { useAppContext } from "../../providers/AppProvider";
import Cookies from "js-cookie";
import { useErrorBoundary } from "react-error-boundary";

const initialForm: PhoneAuthCheckForm = {
  name: "",
  phoneNum: "",
  verificationCode: "",
};

const AuthModal = () => {
  const { showBoundary } = useErrorBoundary();
  const [isAgree, setIsAgree] = useState("-1"); // 0이면 동의, 1이면 미동의
  const [reRequesst, setReRequesst] = useState(false);
  const [toastKey, setToastKey] = useState(0);
  const [isError, setIsError] = useState<ErrorToastKey | null>(null);
  const { isAuth, setIsAuth } = useAppContext();

  const { hours, minutes, seconds, reset } = useTimer(AUTH_DELAY, () => {
    if (reRequesst) {
      setIsError("AUTH_NUM_EXPRIES");
      setToastKey((current) => current + 1);
    }
  });

  const location = useLocation();

  const { elementRef: nameRef, startAnimation: nameStartAnimation } =
    useAnimation<HTMLInputElement>({
      startKeyframes: shakeHorizontal,
      startOptions: shakeInputOptions,
    });

  const { elementRef: phoneNumRef, startAnimation: phoneNumStartAnimation } =
    useAnimation<HTMLInputElement>({
      startKeyframes: shakeHorizontal,
      startOptions: shakeInputOptions,
    });

  const {
    elementRef: verfiyCodeRef,
    startAnimation: verfiyCodeStartAnimation,
  } = useAnimation<HTMLInputElement>({
    startKeyframes: shakeHorizontal,
    startOptions: shakeInputOptions,
  });

  const navigate = useNavigate();

  const { form, onChange } = useInputs<PhoneAuthCheckForm>(initialForm);
  const { name, phoneNum, verificationCode } = form;

  // 인증번호 요청 버튼 핸들러
  const handleRequestPhoneAuthClick = async (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (
      validateName(name, nameStartAnimation) &&
      validatePhoneNumber(phoneNum, phoneNumStartAnimation)
    ) {
      try {
        reset();
        setReRequesst(true);
        await postPhoneAuthRequest({ name, phoneNum });
      } catch (error) {
        console.log("error");
        if (error instanceof Error) {
          if (error.message === "Failed to fetch") return;
          showBoundary(error);
        }
      }
    }
  };

  // 인증하기 버튼 핸들러
  const handleReqeustPhoneAuthCheckClick = async (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    if (
      validateName(name, nameStartAnimation) &&
      validatePhoneNumber(phoneNum, phoneNumStartAnimation) &&
      validateverificationCode(verificationCode, verfiyCodeStartAnimation)
    ) {
      try {
        const response = await postPhoneAuthCheckRequest(form);
        if (response.code === 200) {
          if (location.state.event) setIsAuth(true);
          Cookies.set("auth", response.result.accessToken, { expires: 1 / 24 });
          navigate(
            `${location.state.event === 2 ? "/event2/result" : location.state.isOpen ? "/event1" : "/"}`,
          );
        } else {
          setIsError("AUTH_NUM_INCORRECT");
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "Failed to fetch") return;
          showBoundary(error);
        }
      }
      setToastKey((current) => current + 1);
    }
  };
  if (isAuth) navigate(-1);
  return (
    <div
      role="navigation"
      onClick={() => navigate(-1)}
      className="absolute left-0 top-0 z-50 h-screen w-screen bg-black/90 flex-center"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative h-[52.75rem] w-[35.25rem] flex-col rounded-[2rem] bg-gray-900 p-6 px-8 text-white flex-center"
      >
        <div className="pb-700 font-kia-signature-bold text-title-2">
          개인정보 수집, 이용에 대한 동의
        </div>
        <div className="flex w-full flex-col gap-2 border-y border-gray-500 py-700">
          {PERSONAL_INFO_NOTICE.map((notice) => {
            return (
              <div key={notice.key} className="flex w-full">
                <span className="w-[12.5rem] text-body-2-regular text-gray-300">
                  {notice.key}
                </span>
                <span className="font-kia-signature-bold text-body-2-bold">
                  {notice.value}
                </span>
              </div>
            );
          })}
        </div>
        <form className="flex w-full flex-col gap-600 border-b border-gray-500 py-700">
          <div className="font-kia-signature-bold text-title-4 text-gray-50">
            개인정보 입력
          </div>
          <input
            ref={nameRef}
            className="h-[3.375rem] w-full rounded-lg border border-white/15 bg-white/10 p-500 font-kia-signature text-body-1-regular text-gray-50 placeholder:font-kia-signature placeholder:text-body-1-regular placeholder:text-gray-400"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            maxLength={10}
            placeholder="이름"
          />
          <div className="flex gap-2">
            <input
              ref={phoneNumRef}
              className="h-[3.375rem] w-[24rem] rounded-lg border border-white/15 bg-white/10 p-500 font-kia-signature text-body-1-regular text-gray-50 placeholder:font-kia-signature placeholder:text-body-1-regular placeholder:text-gray-400"
              type="text"
              name="phoneNum"
              value={phoneNum}
              onChange={onChange}
              onInput={phoneAutoHyphen}
              maxLength={13}
              placeholder="전화번호"
            />
            <button
              className="h-full w-[6.5rem] rounded-lg bg-primary font-kia-signature-bold text-body-1-bold text-gray-950"
              onClick={handleRequestPhoneAuthClick}
            >
              {reRequesst ? "재전송" : "인증번호"}
            </button>
          </div>
          <div className="relative">
            <input
              ref={verfiyCodeRef}
              className="h-[3.375rem] w-full rounded-lg border border-white/15 bg-white/10 p-500 font-kia-signature text-body-1-regular text-gray-50 placeholder:font-kia-signature placeholder:text-body-1-regular placeholder:text-gray-400"
              type="text"
              name="verificationCode"
              value={verificationCode}
              onChange={onChange}
              onInput={verifyCodeCorrector}
              maxLength={6}
              placeholder="인증번호"
            />
            {reRequesst && (
              <div
                role="timer"
                className="absolute right-4 top-4 font-kia-signature text-body-1-regular text-gray-300"
              >
                {minutes}:{seconds}
              </div>
            )}
          </div>
        </form>
        <div className="w-full py-700">
          <p className="font-kia-signature-bold text-title-4 text-gray-50">
            개인정보 수집 및 이용에 동의하십니까?
          </p>
          <p className="text-xs text-gray-400">
            귀하께서는 본 동의를 거부하실 권리가 있으며, 미 동의시 본 이벤트에
            참여하실 수 없습니다.
          </p>
          <div className="gap-1000 pt-700 flex-center">
            <label>
              동의
              <input
                type="radio"
                value="0"
                checked={isAgree === "0"}
                onChange={(event) => setIsAgree(event.target.value)}
                name="agree"
              />
            </label>
            <label>
              미동의
              <input
                type="radio"
                value="1"
                checked={isAgree === "1"}
                onChange={(event) => setIsAgree(event.target.value)}
                name="disagree"
              />
            </label>
          </div>
        </div>
        <Button
          onClick={handleReqeustPhoneAuthCheckClick}
          isEnabled={
            isAgree === "0" &&
            validateName(name) &&
            validatePhoneNumber(phoneNum) &&
            validateverificationCode(verificationCode)
          }
          defaultText="인증하기"
          disabledText="인증하기"
          size="small"
        ></Button>
        {isError && (
          <Toast
            key={toastKey}
            content={MESSAGE[isError]}
            position="bottom"
            value={6}
            delay={4000}
            duration={1000}
          />
        )}
        <div className="pt-700">
          <p className="relative pl-4 font-kia-signature text-body-2-regular text-gray-400 before:absolute before:left-0 before:content-['•']">
            본인인증은 60분간 유지되며, 이벤트 페이지 우측 상단의 새로고침
            버튼을 통해 연장 가능합니다.
          </p>
          <p className="relative pl-4 font-kia-signature text-body-2-regular text-gray-400 before:absolute before:left-0 before:content-['•']">
            페이지를 닫을 시, 인증이 만료됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

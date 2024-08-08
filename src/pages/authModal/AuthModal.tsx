import React, { useState } from "react";
import { PERSONAL_INFO_NOTICE } from "../../constants/AuthModal";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router";
import useInputs from "../../hooks/useInputs";
import { PhoneAuthForm } from "../../types/AuthModal";

const initialForm: PhoneAuthForm = {
  name: "",
  phoneNum: "",
  verificationCode: "",
};

const AuthModal = () => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const navigate = useNavigate();

  const { form, onChange, reset } = useInputs<PhoneAuthForm>(initialForm);
  const { name, phoneNum, verificationCode } = form;

  return (
    <div className="h-screen w-screen bg-black opacity-90 flex-center">
      <div className="h-[52.75rem] w-[35.25rem] flex-col rounded-[2rem] bg-white/20 p-6 px-8 text-white flex-center">
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
            className="h-[3.375rem] w-full rounded-lg border border-white/15 bg-white/10 p-500 font-kia-signature text-body-1-regular text-gray-50 placeholder:font-kia-signature placeholder:text-body-1-regular placeholder:text-gray-400"
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="이름"
          />
          <div className="flex gap-2">
            <input
              className="h-[3.375rem] w-[24rem] rounded-lg border border-white/15 bg-white/10 p-500 font-kia-signature text-body-1-regular text-gray-50 placeholder:font-kia-signature placeholder:text-body-1-regular placeholder:text-gray-400"
              type="text"
              name="phoneNum"
              value={phoneNum}
              onChange={onChange}
              placeholder="전화번호"
            />
            <button className="h-full w-[6.5rem] rounded-lg bg-primary font-kia-signature-bold text-body-1-bold text-gray-950">
              인증번호
            </button>
          </div>
          <input
            className="h-[3.375rem] w-full rounded-lg border border-white/15 bg-white/10 p-500 font-kia-signature text-body-1-regular text-gray-50 placeholder:font-kia-signature placeholder:text-body-1-regular placeholder:text-gray-400"
            type="text"
            name="verificationCode"
            value={verificationCode}
            onChange={onChange}
            placeholder="인증번호"
          />
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
            동의
            <input type="radio" value="" />
            미동의
            <input type="radio" value="" />
          </div>
        </div>
        <Button
          onClick={() => {
            navigate(-1);
          }}
          isEnabled={isButtonEnabled}
          defaultText="인증하기"
          disabledText="인증하기"
          size="small"
        ></Button>
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

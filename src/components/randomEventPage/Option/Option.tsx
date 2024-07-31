import React, { MouseEventHandler } from "react";

interface OptionInterface {
  label: string;
  content: string;
  state: "default" | "selected" | "unselected";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const STATE_CLASSES = {
  default: "bg-opacity-5",
  selected: "bg-opacity-10",
  unselected: "bg-opacity-5 opacity-50",
};

/**
 * 운전자 유형 테스트 선택지
 * @param label 선택지 A,B
 * @param content 내용
 * @param state default, selected, unselected
 * @param onClick onClick 함수
 * @returns
 */
const Option = ({ label, content, state, onClick }: OptionInterface) => {
  const stateClasses = STATE_CLASSES[state];
  return (
    <button
      onClick={onClick}
      className={`h-[40rem] w-[46rem] rounded-[2rem] border-2 border-white border-opacity-15 bg-white font-kia-signature text-white ${stateClasses} gap-16 backdrop-blur-lg hover:bg-opacity-20`}
    >
      <p>{label}</p>
      <p>{content}</p>
    </button>
  );
};

export default Option;

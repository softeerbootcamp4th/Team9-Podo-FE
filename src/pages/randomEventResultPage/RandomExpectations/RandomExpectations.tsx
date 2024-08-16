import React, { ChangeEvent, forwardRef, useState } from "react";
import Toast from "../../../components/common/Toast/Toast";
import { ERROR_MSG } from "../../../constants/RandomEventData";
import { postComment } from "../../../api/fetch";

const RandomExpectations = forwardRef<HTMLDivElement>((props, ref) => {
  const [error, setError] = useState<"short" | "inappropriate" | null>(null);
  const [expectation, setExpectation] = useState<string>("");
  const [toastKey, setToastKey] = useState(0);

  const onClickHandler = () => {
    if (expectation.length < 20) setError("short");
    else if (
      expectation === "부적절한 답변/부적절한 답변/부적절한 답변/부적절한 답변"
    )
      //test를 위한 임시 부적절한 답변
      setError("inappropriate");
    else {
      setError(null);
      postComment(expectation);
      setExpectation("");
    }
    setToastKey((current) => current + 1);
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setExpectation(e.target.value);
  };

  return (
    <div className="mb-[4.5rem] w-[94rem]" ref={ref}>
      <hr className="h-[1px] bg-gray-400" />
      <p className="mb-8 mt-[4.5rem] font-kia-signature-bold text-title-2 text-gray-50">
        기대평 작성 시, 당첨 확률 up!
      </p>
      <div className="relative h-[16.875rem] gap-5 rounded-[2.5rem] bg-gray-950 flex-center">
        <textarea
          onChange={handleTextArea}
          value={expectation}
          placeholder="최소 20자 이상 입력하세요."
          className="ml-8 h-[12.25rem] w-[77.25rem] resize-none border-none bg-gray-950 text-gray-50 outline-none"
        ></textarea>
        <button
          onClick={onClickHandler}
          className="h-[15.375rem] w-[12.25rem] rounded-[1.75rem] bg-primary font-kia-signature-bold text-title-3 text-gray-950 flex-center"
        >
          참여하기
        </button>
        {error && (
          <Toast
            key={toastKey}
            content={ERROR_MSG[`${error}`]}
            position="bottom"
            value={4}
            delay={4000}
            duration={1000}
          />
        )}
      </div>
    </div>
  );
});

export default RandomExpectations;

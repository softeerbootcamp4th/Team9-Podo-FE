import React, {
  ChangeEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { useErrorBoundary } from "react-error-boundary";
import { postComment } from "../../../api/fetch";
import Toast from "../../../components/common/Toast/Toast";
import { ERROR_MSG } from "../../../constants/RandomEventData";
import WordCloud from "../../../components/mainPage/InfoScreen/WordCloud";

const RandomExpectations = forwardRef<HTMLDivElement>((props, ref) => {
  const [error, setError] = useState<
    "short" | "inappropriate" | "success" | null
  >(null);
  const [expectation, setExpectation] = useState<string>("");
  const [toastKey, setToastKey] = useState(0);
  const { showBoundary } = useErrorBoundary();
  const wordCloudRef = useRef<HTMLDivElement>(null);

  const onClickHandler = async () => {
    if (expectation.length < 20) setError("short");
    else {
      try {
        await postComment(expectation);
        setError("success");
        setExpectation("");
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === "Failed to fetch") return;
          showBoundary(error);
        }
      }
    }
    setToastKey((current) => current + 1);
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setExpectation(e.target.value);
  };

  useEffect(() => {
    if (error === "success" && wordCloudRef.current) {
      wordCloudRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [error]);

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
          maxLength={200}
          className="ml-8 h-[12.25rem] w-[77.25rem] resize-none border-none bg-gray-950 text-gray-50 outline-none"
        ></textarea>
        <button
          onClick={onClickHandler}
          className={`h-[15.375rem] w-[12.25rem] rounded-[1.75rem] ${error === "success" ? "pointer-events-none bg-secondary text-gray-300" : "bg-primary"} font-kia-signature-bold text-title-3 text-gray-950 flex-center`}
        >
          {error === "success" ? "참여완료" : "참여하기"}
        </button>
        {error && (
          <Toast
            key={toastKey}
            content={ERROR_MSG[`${error}`]}
            position="bottom"
            value={4}
            delay={4000}
            duration={1000}
            color={error === "success" ? "bg-[#66bb6a]" : undefined}
          />
        )}
      </div>
      <div className="flex-col flex-center" ref={wordCloudRef}>
        {error === "success" && (
          <>
            <p className="my-4 font-kia-signature-bold text-title-4 text-gray-50">
              작성한 기대평은 워드 클라우드에 반영됩니다
            </p>
            <WordCloud></WordCloud>
          </>
        )}
      </div>
    </div>
  );
});

export default RandomExpectations;

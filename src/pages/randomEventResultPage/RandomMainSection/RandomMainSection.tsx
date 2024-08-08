import React, { useState } from "react";
import { useAppContext } from "../../../providers/AppProvider";
import Button from "../../../components/common/Button/Button";
import reset from "../../../assets/images/reset.png";
import share from "../../../assets/images/share.png";
import { useNavigate } from "react-router";

interface RandomMainInterface {
  description: Array<DescriptionInterface>;
  scenarioList: Array<ScenarioInterface>;
}

interface DescriptionInterface {
  content: string;
  highlighted: boolean;
}

interface ScenarioInterface {
  image: string;
  title: string;
  subtitle: string;
}

const RandomMainSection = ({
  description,
  scenarioList,
}: RandomMainInterface) => {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const { isAuth, isRandomEnd } = appContext;
  const [isCopied, setIsCopied] = useState(false);

  const handleRetry = () => {
    navigate("/event2/0");
  };

  const handleShare = () => {
    if (isCopied) return;
    const url = "https://example.com";
    navigator.clipboard.writeText(url);

    setIsCopied(true);

    const CopiedTimeout = setTimeout(() => {
      setIsCopied(false);
    }, 4000);

    return () => clearTimeout(CopiedTimeout);
  };

  const { setIsAuth } = useAppContext();
  const onClickHandler = () => {
    if (isAuth) {
      //이벤트 참여 백에 전달
    } else {
      //본인인증 모달
      //본인인증 대기
      setIsAuth(true);
    }
    //기대평 작성창
  };

  return (
    <div className="mb-24 w-[94rem]">
      <div className="relative flex h-[36.25rem] w-[94rem] flex-col gap-6 rounded-[2.5rem] border-white border-opacity-15 bg-white bg-opacity-10 p-10 backdrop-blur-lg">
        <div className="absolute -top-10 right-0 flex gap-4 font-kia-signature-bold text-body-1-bold text-white">
          <div
            className={`absolute -top-[4.5rem] right-0 text-nowrap rounded-full bg-[#4B7C83] px-6 py-3 transition-opacity duration-200 flex-center ${isCopied ? "opacity-100" : "animate-fadeOut"}`}
          >
            클립보드에 URL이 복사되었습니다
            <div
              style={{
                position: "absolute",
                transform: "rotate(90deg)",
                top: "50%",
                left: "80%",
                border: "solid transparent",
                borderTopColor: "#4B7C83",
                borderWidth: "20px",
                marginLeft: "-20px",
                pointerEvents: "none",
                content: '""',
              }}
            ></div>
          </div>

          <button onClick={handleRetry} className="flex gap-2">
            <img src={reset} alt="다시하기"></img>다시하기
          </button>
          <button onClick={handleShare} className="flex gap-2">
            <img src={share} alt="공유하기" />
            공유하기
          </button>
        </div>
        <div className="flex font-kia-signature-bold text-title-3">
          {description.map((item, index) => (
            <span
              key={index}
              className={`${item.highlighted ? "text-gray-50" : "text-gray-400"}`}
            >
              {item.content}
            </span>
          ))}
        </div>
        <hr className="h-[1px] bg-gray-400" />
        <div className="flex gap-6">
          {scenarioList.map((scenario, index) => (
            <div key={index} className="flex flex-col gap-3">
              <p className="font-kia-signature-bold text-body-1-bold text-gray-50">{`${index + 1}.`}</p>
              <img
                src={scenario.image}
                alt="시나리오"
                className="h-[15.25rem] w-[28.75rem] rounded-xl"
              />
              <p className="font-kia-signature-bold text-title-4 text-gray-50">
                {scenario.title}
              </p>
              <p className="w-[26rem] font-kia-signature text-body-1-regular text-gray-300">
                {scenario.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-4">
        <p className="font-kia-signature text-gray-200 flex-center">
          이벤트 응모하고&nbsp;
          <span className="font-kia-signature-bold text-gray-50">
            {"시그니엘 숙박권"}
          </span>
          &nbsp;받자!!
        </p>
        <Button
          size="long"
          onClick={onClickHandler}
          defaultText={
            isAuth ? "이벤트 참여하기" : "본인인증하고 이벤트 참여하기"
          }
          disabledText="이벤트 참여 완료"
          isEnabled={!isRandomEnd && !isAuth}
        ></Button>
      </div>
    </div>
  );
};

export default RandomMainSection;

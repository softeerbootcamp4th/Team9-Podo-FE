import React, { useState } from "react";
import { useAppContext } from "../../../providers/AppProvider";
import { useLocation, useNavigate } from "react-router";
import Button from "../../../components/common/Button/Button";
import reset from "../../../assets/images/reset.png";
import share from "../../../assets/images/share.png";
import { RandomMainInterface } from "../../../types/RandomEvent";
import Tooltip from "../../../components/randomEventPage/Tooltip/Tooltip";
import { postRandomResult } from "../../../api/fetch";

const RandomMainSection = ({
  resultTypeId,
  description,
  scenarioList,
}: RandomMainInterface) => {
  const appContext = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth, isRandomEnd, setIsAuth } = appContext;
  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("https://www.hyundaiseltos.site/");

  const handleRetry = () => {
    navigate("/event2/0");
  };

  const handleShare = () => {
    if (isCopied) return;
    navigator.clipboard.writeText(shareUrl);

    setIsCopied(true);

    const CopiedTimeout = setTimeout(() => {
      setIsCopied(false);
    }, 4000);

    return () => clearTimeout(CopiedTimeout);
  };

  const onClickHandler = async () => {
    if (isAuth) {
      const myUrl = await postRandomResult(resultTypeId);

      setShareUrl(myUrl.result.uniqueLink);
    } else {
      navigate("auth-modal", {
        state: { background: location, event: 1 },
      });
    }
  };

  return (
    <div className="mb-24 w-[94rem]">
      <div className="relative flex h-[36.25rem] w-[94rem] flex-col gap-6 rounded-[2.5rem] border-white border-opacity-15 bg-white bg-opacity-10 p-10 backdrop-blur-lg">
        <div className="absolute -top-10 right-0 flex gap-4 font-kia-signature-bold text-body-1-bold text-white">
          <Tooltip
            content="클립보드에 URL이 복사되었습니다"
            isVisible={isCopied}
          />

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
                src={`http://${scenario.image}`}
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

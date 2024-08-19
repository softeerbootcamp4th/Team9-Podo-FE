import React, { useState, useCallback } from "react";
import { useAppContext } from "../../../providers/AppProvider";
import { useLocation, useNavigate } from "react-router";
import Button from "../../../components/common/Button/Button";
import reset from "../../../../common/assets/images/reset.png";
import share from "../../../../common/assets/images/share.png";
import { RandomMainInterface } from "../../../types/RandomEvent";
import Tooltip from "../../../components/randomEventPage/Tooltip/Tooltip";
import { postRandomResult } from "../../../api/fetch";
import {
  TEXT_CONTENT,
  TOOLTIP_CONTENT,
} from "../../../constants/RandomEventData";

const RandomMainSection = ({
  resultTypeId,
  description,
  scenarioList,
}: RandomMainInterface) => {
  const { isAuth, isRandomEnd } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const [isCopied, setIsCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("https://www.hyundaiseltos.site/");

  const handleRetry = () => {
    navigate("/event2/0");
  };

  const handleShare = useCallback(() => {
    if (!isCopied) {
      navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);

      const timeoutId = setTimeout(() => setIsCopied(false), 4000);
      return () => clearTimeout(timeoutId);
    }
  }, [isCopied]);

  const handleEventParticipation = async () => {
    if (isAuth) {
      const { result } = await postRandomResult(resultTypeId);
      setShareUrl(result.uniqueLink);
    } else {
      navigate("/auth-modal", { state: { background: location, event: 2 } });
    }
  };

  return (
    <div className="mb-24 w-[94rem]">
      <div className="relative flex h-[36.25rem] w-[94rem] flex-col gap-6 rounded-[2.5rem] border-white border-opacity-15 bg-white bg-opacity-10 p-10 backdrop-blur-lg">
        <div className="absolute -top-10 right-0 flex gap-4 font-kia-signature-bold text-body-1-bold text-white">
          <Tooltip content={TOOLTIP_CONTENT} isVisible={isCopied} />
          <button onClick={handleRetry} className="flex gap-2">
            <img src={reset} alt="다시하기" />
            다시하기
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
          {TEXT_CONTENT.EVENT_PARTICIPATION.PROMPT}
          <span className="font-kia-signature-bold text-gray-50">
            {TEXT_CONTENT.EVENT_PARTICIPATION.PRIZE_TEXT}
          </span>
          {TEXT_CONTENT.EVENT_PARTICIPATION.PRIZE_SUFFIX}
        </p>
        <Button
          size="long"
          onClick={handleEventParticipation}
          defaultText={
            isAuth ? "이벤트 참여하기" : "본인인증하고 이벤트 참여하기"
          }
          disabledText="이벤트 참여 완료"
          isEnabled={!isRandomEnd && !isAuth}
        />
      </div>
    </div>
  );
};

export default RandomMainSection;
import React, { useEffect, useState } from "react";
import FCFSCar from "../../../common/assets/images/FCFSCar.webp";
import FCFSKey from "../../../common/assets/images/FCFSKey.webp";
import FCFSKeyButton from "../../../common/assets/svg/FCFSKeyButton";
import { fetchFCFSResult } from "../../api/fetch";
import useAnimation from "../../hooks/useAnimation";
import {
  fadeDown,
  fadeIn,
  fadeOut,
  carMoveRight,
} from "../../styles/keyframes";
import {
  bothFadeOptions,
  fadeOptions,
  FCFSWinOptions,
} from "../../styles/options";
import Button from "../../components/common/Button/Button";
import { useNavigate } from "react-router";
import FCFSNoticeBanner from "../../../common/assets/svg/FCFSNoticeBanner";
import { NOTICE } from "../../constants/FCFSEventResultData";
import Glow from "../../components/common/Glow/Glow";
import Confetti from "react-confetti";
import { useErrorBoundary } from "react-error-boundary";

const FCFSEventResultPage = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const [isWin, setIsWin] = useState(false);
  const [isResultVisible, setIsResultVisible] = useState(false);

  // 차 애니메이션
  const { elementRef: carRef, startAnimation: carStartAnimation } =
    useAnimation<HTMLImageElement>({
      startKeyframes: carMoveRight,
      startOptions: FCFSWinOptions,
    });

  // 안내문구 애니메이션
  const { elementRef: textRef, startAnimation: textStartAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: fadeOut,
      startOptions: fadeOptions,
    });

  // 키 애니메이션
  const { elementRef: keyRef, startAnimation: keyStartAnimation } =
    useAnimation<HTMLImageElement>({
      startKeyframes: fadeDown,
      startOptions: fadeOptions,
    });

  // 이벤트 2 이동 에니메이션
  const { elementRef: buttonRef, startAnimation: buttonStartAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: fadeIn,
      startOptions: bothFadeOptions,
    });

  const fetchData = async () => {
    const quizData = await fetchFCFSResult();
    if (Object.keys(quizData).length !== 0) setIsWin(true);
  };

  const handleButtonClick = async () => {
    try {
      await fetchData();
      setIsResultVisible(true);
      carStartAnimation();
      textStartAnimation();
      keyStartAnimation();
      buttonStartAnimation();
    } catch (error) {
      showBoundary(error);
    }
  };

  useEffect(() => {
    if (isResultVisible) {
      buttonStartAnimation();
    }
  }, [isResultVisible, buttonStartAnimation]);

  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-start overflow-hidden bg-black">
      {isWin && isResultVisible && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div>
        <Glow />
      </div>
      {!isResultVisible && (
        <header
          className="relative z-10 mt-12 h-[4.125rem] w-[12rem] p-500 px-800 text-center font-kia-signature-bold text-title-3 flex-center before:-inset-[0rem] before:content-none before:gradient-mask"
          role="banner"
        >
          <span className="gradient-text">오늘의 퀴즈</span>
        </header>
      )}
      <img
        ref={carRef}
        className="absolute top-20 z-10 -scale-x-90 scale-y-90"
        src={FCFSCar}
        alt="seltos-car"
      />
      {isResultVisible && (
        <div className="absolute top-[23rem] z-0 font-kia-signature-bold text-8xl text-white">
          {isWin ? "당첨을 축하합니다!" : "아쉽지만 다음 기회에..."}
        </div>
      )}
      {isResultVisible && (
        <>
          <div ref={buttonRef} className="absolute top-[32rem] mt-[4.5rem]">
            <Button
              size="small"
              onClick={() => navigate("/event2/0")}
              defaultText="EVENT2 참여하러 가기"
              disabledText=""
              isEnabled={true}
            />
          </div>
          <FCFSNoticeBanner className="absolute bottom-0" />
          <div className="flex-col text-white flex-center">
            {isWin ? (
              <div className="absolute bottom-32">
                <div className="mb-600 text-center font-kia-signature-bold text-title-3">
                  {NOTICE.success.header}
                </div>
                {NOTICE.success.content.map((text, index) => (
                  <p
                    key={text}
                    className="font-kia-signature text-body-1-regular text-gray-200"
                  >
                    • {text}
                  </p>
                ))}
              </div>
            ) : (
              <div className="absolute bottom-40 flex-col flex-center">
                {NOTICE.fail.content.map((text, index) => (
                  <p
                    key={text}
                    className="font-kia-signature text-body-1-regular text-gray-200"
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </>
      )}
      <div
        ref={textRef}
        className="absolute top-[41rem] h-[5.125rem] w-[53rem] rounded-[2rem] border border-white/15 bg-white/10 px-800 font-kia-signature-bold text-title-4 text-gray-50 flex-center hover:bg-white/20"
      >
        <p>
          The 2025 셀토스의{" "}
          <span className="text-primary">원격 스마트 보조 기능</span>을 통해
          당첨을 확인해보세요!
        </p>
      </div>
      <img
        ref={keyRef}
        className="absolute -bottom-8"
        src={FCFSKey}
        alt="car-key"
      />
      {!isResultVisible && (
        <FCFSKeyButton
          className="absolute bottom-0"
          onClick={handleButtonClick}
        />
      )}
    </div>
  );
};

export default FCFSEventResultPage;

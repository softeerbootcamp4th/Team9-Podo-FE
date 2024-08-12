import React, { useEffect, useState } from "react";
import useAnimation from "../../../hooks/useAnimation";
import EventSelectOptions from "../../../components/mainPage/MainScreen/EventSelectOptions/EventSelectOptions";
import e1Gift from "../../../assets/images/e1Gift.png";
import e2Gift from "../../../assets/images/e2Gift.png";
import mainCar from "../../../assets/images/mainCar.png";
import landingCar from "../../../assets/images/landingCar.png";

interface EventSelectSectionInterface {
  onFCFSClick: () => void;
  onRandomClick: () => void;
}

const EventSelectSection = ({
  onFCFSClick,
  onRandomClick,
}: EventSelectSectionInterface) => {
  const [isLanding, setIsLanding] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const { elementRef: landingCarRef, startAnimation: landingCarAnimation } =
    useAnimation<HTMLImageElement>({
      startKeyframes: [
        { transform: "translateX(0)" },
        { transform: "translateX(-160rem)", display: "none" },
      ],
      startOptions: { duration: 500, fill: "forwards", delay: 100 },
    });
  const {
    elementRef: mainCarRef,
    startAnimation: mainCarAnimation,
    stopAnimation: mainCarStopAnimation,
  } = useAnimation<HTMLImageElement>({
    startKeyframes: [{ opacity: "0" }, { opacity: "100" }],
    startOptions: { duration: 2000, fill: "forwards", delay: 1000 },
    cancelKeyframes: [{ opacity: "100" }, { opacity: "0" }],
    cancelOptions: { duration: 200, fill: "forwards" },
  });

  const { elementRef: titleRef, startAnimation: titleAnimation } =
    useAnimation<HTMLDivElement>({
      startKeyframes: [{ opacity: "0" }, { opacity: "100" }],
      startOptions: { duration: 2000, fill: "forwards", delay: 600 },
    });

  useEffect(() => {
    landingCarAnimation();
    mainCarAnimation();
    titleAnimation();

    const landingTimeout = setTimeout(() => {
      setIsLanding(false);
      mainCarStopAnimation();
    }, 4000);

    return () => clearTimeout(landingTimeout);
  }, []);

  return (
    <div className="relative h-screen w-screen snap-start flex-col flex-center">
      <div
        className={`${!isLanding ? "top-12" : "top-52"} absolute z-10 flex flex-col items-center justify-start gap-[9rem] transition-all duration-500`}
      >
        <div
          className="w-[36.75rem] rounded-full p-[1px] font-kia-signature-bold text-title-4 text-gray-50 opacity-0"
          style={{
            background:
              "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
          }}
          ref={titleRef}
        >
          <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-900 px-10 py-6 flex-center">
            <p className="font-kia-signature-bold text-title-2 text-glow-white">
              The 2025 셀토스 출시 이벤트
            </p>
          </div>
        </div>
      </div>
      <img
        src={mainCar}
        alt=""
        className={`absolute top-96 opacity-0`}
        ref={mainCarRef}
      />

      {isLanding && (
        <img
          src={landingCar}
          alt=""
          className="absolute -bottom-96 -right-1/2 h-[64rem] w-[150rem]"
          ref={landingCarRef}
        />
      )}

      {!isLanding && (
        <div className="h-full w-full animate-fadeIn flex-center">
          <EventSelectOptions
            index={0}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            title="event 1."
            description={`매일 선착순 100명! \n퀴즈 풀고 스타벅스 커피 받아가자!`}
            img={e1Gift}
            buttonInfo={{
              size: "small",
              isEnabled: true,
              onClick: onFCFSClick,
            }}
          />
          <EventSelectOptions
            index={1}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            title="event 2."
            description={`내 운전자 유형에 맞는 셀토스 라이프스타일 추천받고,\n 시그니엘 숙박권 당첨의 기회!`}
            img={e2Gift}
            buttonInfo={{
              size: "small",
              isEnabled: true,
              onClick: onRandomClick,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default EventSelectSection;

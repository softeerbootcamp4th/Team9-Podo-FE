import React, { useEffect, useState } from "react";
import useAnimation, { UseAnimationProps } from "../../../hooks/useAnimation";
import EventSelectOptions from "../../../components/mainPage/MainScreen/EventSelectOptions/EventSelectOptions";
import e1Gift from "../../../assets/images/e1Gift.png";
import e2Gift from "../../../assets/images/e2Gift.png";
import mainCar from "../../../assets/images/mainCar.png";
import landingCar from "../../../assets/images/landingCar.png";
import { SELECT_DATA } from "../../../constants/EventData";

const LANDING_CAR_ANIMATION_OPTIONS: UseAnimationProps = {
  startKeyframes: [
    { transform: "translateX(0)" },
    { transform: "translateX(-160rem)", display: "none" },
  ],
  startOptions: { duration: 500, fill: "forwards", delay: 100 },
};

const MAIN_CAR_ANIMATION_OPTIONS: UseAnimationProps = {
  startKeyframes: [{ opacity: "0" }, { opacity: "100" }],
  startOptions: { duration: 2000, fill: "forwards", delay: 1000 },
  cancelKeyframes: [{ opacity: "100" }, { opacity: "0" }],
  cancelOptions: { duration: 200, fill: "forwards" },
};

const TITLE_ANIMATION_OPTIONS: UseAnimationProps = {
  startKeyframes: [{ opacity: "0" }, { opacity: "100" }],
  startOptions: { duration: 2000, fill: "forwards", delay: 600 },
};

const LANDING_TIMEOUT_DURATION = 4000;

const EventSelectSection = ({
  onFCFSClick,
  onRandomClick,
}: {
  onFCFSClick: () => void;
  onRandomClick: () => void;
}) => {
  const [isLanding, setIsLanding] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { elementRef: landingCarRef, startAnimation: landingCarAnimation } =
    useAnimation<HTMLImageElement>(LANDING_CAR_ANIMATION_OPTIONS);

  const {
    elementRef: mainCarRef,
    startAnimation: mainCarAnimation,
    stopAnimation: mainCarStopAnimation,
  } = useAnimation<HTMLImageElement>(MAIN_CAR_ANIMATION_OPTIONS);

  const { elementRef: titleRef, startAnimation: titleAnimation } =
    useAnimation<HTMLDivElement>(TITLE_ANIMATION_OPTIONS);

  useEffect(() => {
    landingCarAnimation();
    mainCarAnimation();
    titleAnimation();

    const landingTimeout = setTimeout(() => {
      setIsLanding(false);
      mainCarStopAnimation();
    }, LANDING_TIMEOUT_DURATION);

    return () => clearTimeout(landingTimeout);
  }, []);

  return (
    <div className="relative h-screen w-screen snap-start flex-col flex-center">
      <div
        className={`${
          !isLanding ? "top-12" : "top-52"
        } absolute z-10 flex flex-col items-center justify-start gap-[9rem] transition-all duration-500`}
      >
        <div
          ref={titleRef}
          className="before:gradient-mask relative w-[36.75rem] opacity-0 before:-inset-[2rem] before:content-none"
        >
          <p className="text-center font-kia-signature-bold text-title-2 text-glow-white">
            {SELECT_DATA.PAGE_TITLE}
          </p>
        </div>
      </div>

      <img
        src={mainCar}
        alt="Main Car"
        className={`absolute top-96 opacity-0`}
        ref={mainCarRef}
      />

      {isLanding && (
        <img
          src={landingCar}
          alt="Landing Car"
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
            title={SELECT_DATA.EVENT_1.TITLE}
            description={SELECT_DATA.EVENT_1.DESCRIPTION}
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
            title={SELECT_DATA.EVENT_2.TITLE}
            description={SELECT_DATA.EVENT_2.DESCRIPTION}
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

import React, { useEffect, useState } from "react";
import { RouletteInterface } from "../../../types/RandomEvent";
import { ROULETTE_VALUES } from "../../../constants/RandomEventData";

/**
 * 룰렛이 돌며 약 5초 뒤 targetText가 표시됨
 * 현재 4개의 요소만 자연스럽게 표시됨 => 시간 조절 부분이 하드코딩되어있음
 * @param textList 돌아갈 텍스트
 * @param targetText 마지막에 뜨는 텍스트
 * @returns
 */
const Roulette = ({ textList, targetText }: RouletteInterface) => {
  const [duration, setDuration] = useState(ROULETTE_VALUES.INITIAL_DURATION);
  const [delay, setDelay] = useState(ROULETTE_VALUES.INITIAL_DELAY);
  const [showType, setShowType] = useState(false);

  useEffect(() => {
    const totalDuration =
      duration * ROULETTE_VALUES.BASE_ANIMATION_DURATION_MULTIPLIER * 1000;

    if (duration > 0.7) {
      const timeoutId = setTimeout(() => {
        setShowType(true);
      }, totalDuration);
      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(() => {
      setDuration((current) => current + ROULETTE_VALUES.DURATION_INCREMENT);
      setDelay((current) => current + ROULETTE_VALUES.DELAY_INCREMENT);
    }, totalDuration);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div className="relative flex w-[36.75rem] items-center justify-center font-kia-signature-bold text-title-4 text-gray-50 before:-inset-[0rem] before:content-none before:gradient-mask">
      <div className="relative h-full w-full overflow-hidden px-10 py-6 flex-center">
        <p
          className={`font-kia-signature-bold text-title-2 transition duration-700 text-glow-white ${showType ? "" : "-translate-y-16"}`}
        >
          {targetText}
        </p>
        {textList.map((text, index) => (
          <p
            key={index + duration * 3}
            className={`absolute -top-16 animate-moveText font-kia-signature-bold text-title-2 text-glow-white`}
            style={{
              animationName: "moveText",
              animationDuration: `${duration}s`,
              animationTimingFunction: "linear",
              animationDelay: `${index * delay}s`,
              animationFillMode: "forwards",
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Roulette;

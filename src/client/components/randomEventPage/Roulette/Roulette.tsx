import React, { useEffect, useState } from "react";
import { RouletteInterface } from "../../../types/RandomEvent";

/**
 * 룰렛이 돌며 약 5초 뒤 targetText가 표시됨
 * 현재 4개의 요소만 자연스럽게 표시됨 => 시간 조절 부분이 하드코딩되어있음
 * @param textList 돌아갈 텍스트
 * @param targetText 마지막에 뜨는 텍스트
 * @returns
 */
const Roulette = ({ textList, targetText }: RouletteInterface) => {
  const [duration, setDuration] = useState(0.2);
  const [delay, setDelay] = useState(0.1);
  const [showType, setShowType] = useState(false);

  useEffect(() => {
    if (duration > 0.7) {
      const timeoutId = setTimeout(
        () => {
          setShowType(true);
        },
        duration * 2.1 * 1000,
      );
      return () => clearTimeout(timeoutId);
    }

    const intervalId = setInterval(
      () => {
        setDuration((current) => current + 0.2);
        setDelay((current) => current + 0.1);
      },
      duration * 2.1 * 1000,
    );

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

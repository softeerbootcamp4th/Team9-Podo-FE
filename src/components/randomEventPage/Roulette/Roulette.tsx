import React, { useEffect, useState } from "react";

interface RouletteInterface {
  textList: Array<string>;
  targetText: string;
}

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
    <div
      className="flex w-[36.75rem] items-center justify-center rounded-full p-[1px] font-kia-signature-bold text-title-4 text-gray-50"
      style={{
        background:
          "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-950 px-10 py-6 flex-center">
        <p
          className={`text-glow-white font-kia-signature-bold text-title-2 transition duration-700 ${showType ? "" : "-translate-y-16"}`}
        >
          {targetText}
        </p>
        {textList.map((text, index) => (
          <p
            key={index + duration * 3}
            className={`text-glow-white animate-moveText absolute -top-16 font-kia-signature-bold text-title-2`}
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

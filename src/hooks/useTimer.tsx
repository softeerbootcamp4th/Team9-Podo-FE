import React, { useEffect, useState } from "react";

/**
 * 타이머 Custom Hook
 * @param {number} initialTime - 초기 설정 시간
 * @param {Function} onEndHandler - 종료 시 실행될 로직
 * @returns
 * @example
 * const TimerComponent = () => {
 *   const { reset, minutes, second } = useTimer(1000, () => navigate("/"));
 *
 *   return (
 *     <div>
 *       {minutes} : {second}
 *     </div>
 *   );
 * };
 * */
const useTimer = (initialTime: number, onEndHandler?: Function) => {
  const [leftTime, setLeftTime] = useState(initialTime);

  const INTERVAL = 1000;
  const minutes = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(
    2,
    "0",
  );
  const second = String(Math.floor((leftTime / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("set");
      setLeftTime((prevTime) => prevTime - INTERVAL);
    }, INTERVAL);

    if (leftTime <= 0) {
      clearInterval(timer);
      if (onEndHandler) onEndHandler();
    }

    return () => {
      clearInterval(timer);
    };
  }, [leftTime]);

  const reset = () => {
    setLeftTime(initialTime);
  };

  return { reset, minutes, second };
};

export default useTimer;

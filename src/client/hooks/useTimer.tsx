import React, { useEffect, useState } from "react";

/**
 * 타이머 Custom Hook
 * @param {number} initialTime - 초기 설정 시간 (밀리초 단위)
 * @param {Function} onEndHandler - 종료 시 실행될 로직
 * @returns
 * @example
 * const TimerComponent = () => {
 *   const { reset, hours, minutes, seconds } = useTimer(3600000, () => navigate("/"));
 *
 *   return (
 *     <div>
 *       {hours} : {minutes} : {seconds}
 *     </div>
 *   );
 * };
 * */
const useTimer = (initialTime: number, onEndHandler?: Function) => {
  const [leftTime, setLeftTime] = useState(initialTime);

  const INTERVAL = 1000;

  const hours = String(Math.floor((leftTime / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0",
  );
  const minutes = String(Math.floor((leftTime / (1000 * 60)) % 60)).padStart(
    2,
    "0",
  );
  const seconds = String(Math.floor((leftTime / 1000) % 60)).padStart(2, "0");

  useEffect(() => {
    const timer = setInterval(() => {
      setLeftTime((prevTime) => {
        const newTime = prevTime - INTERVAL;
        if (newTime <= 0) {
          clearInterval(timer);
          if (onEndHandler) onEndHandler();
          return 0;
        }
        return newTime;
      });
    }, INTERVAL);

    return () => {
      clearInterval(timer);
    };
  }, [leftTime, onEndHandler]);

  const reset = () => {
    setLeftTime(initialTime);
  };

  return { reset, hours, minutes, seconds };
};

export default useTimer;

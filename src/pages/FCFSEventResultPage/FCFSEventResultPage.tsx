import React, { useState } from "react";

interface FCFSResultInterface {
  isWinner: boolean;
}

const FCFSEventResultPage = ({ isWinner }: FCFSResultInterface) => {
  const [isResultVisible, setIsResultVisible] = useState(false);

  return (
    <div>
      <div>오늘의 퀴즈</div>
      <img src="" alt="자동차" />
      <img src="" alt="키" />
      <p>The 2025 셀토스의 원격 스마트 보조 기능을 통해 당첨을 확인해보세요!</p>
      <button>버튼</button>
      {isResultVisible && isWinner ? (
        <>
          <div>당첨을 축하합니다!</div>
          <button>Event 2 참여하러 가기</button>
          <div>Notions</div>
        </>
      ) : (
        <>
          <div>아쉽지만 다음 기회에...</div>
          <button>Event 2 참여하러 가기</button>
          <div>Notions</div>
        </>
      )}
    </div>
  );
};

export default FCFSEventResultPage;

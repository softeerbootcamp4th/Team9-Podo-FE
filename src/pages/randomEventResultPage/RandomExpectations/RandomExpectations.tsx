import React from "react";

const RandomExpectations = () => {
  return (
    <div>
      <p>기대평 작성 시, 당첨 확률 up!</p>
      <div>
        <textarea placeholder="최소 20자 이상 입력하세요."></textarea>
        <button>참여하기</button>
      </div>
      <div>error toast</div>
    </div>
  );
};

export default RandomExpectations;

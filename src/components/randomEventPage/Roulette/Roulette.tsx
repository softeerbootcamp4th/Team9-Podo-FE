import React from "react";

const Roulette = ({ textList, targetText }) => {
  return (
    <div
      className="flex items-center justify-center rounded-full p-[1px] font-kia-signature-bold text-title-4 text-gray-50"
      style={{
        background:
          "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
      }}
    >
      <div className="h-full w-full rounded-full bg-gray-950 p-6 flex-center">
        <p>안전을 최우선시하는 베스트 드라이버</p>
      </div>
    </div>
  );
};

export default Roulette;

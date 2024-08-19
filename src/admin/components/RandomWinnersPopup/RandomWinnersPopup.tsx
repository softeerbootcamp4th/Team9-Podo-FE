import React from "react";

const RandomWinnersPopup: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        {/* Modal Title */}
        <h2 className="mb-4 text-2xl font-bold">추첨 진행</h2>

        {/* Input Section: 당첨 상품/인원 입력 */}
        <div className="mb-4">
          <p className="mb-2 font-semibold">당첨 상품/인원 입력</p>

          {/* Item List */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span>1</span>
              <input
                type="text"
                placeholder="항목"
                className="flex-1 rounded border p-2"
              />
              <input
                type="number"
                placeholder="1"
                className="w-20 rounded border p-2"
              />
              <span>명</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>2</span>
              <input
                type="text"
                placeholder="항목"
                className="flex-1 rounded border p-2"
              />
              <input
                type="number"
                placeholder="3"
                className="w-20 rounded border p-2"
              />
              <span>명</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>3</span>
              <input
                type="text"
                placeholder="항목"
                className="flex-1 rounded border p-2"
              />
              <input
                type="number"
                placeholder="10"
                className="w-20 rounded border p-2"
              />
              <span>명</span>
            </div>
          </div>

          <button className="mt-2 rounded bg-gray-200 px-4 py-2 text-gray-700">
            항목 추가
          </button>
        </div>

        {/* Total Count */}
        <div className="mb-4">
          <p className="font-semibold">총 14 / 40명</p>
        </div>

        {/* Condition Section */}
        <div className="mb-4">
          <p className="mb-2 font-semibold">가중치 부여 조건</p>
          <div className="flex items-center space-x-2">
            <select className="flex-1 rounded border p-2">
              <option>조건</option>
              <option>기대평 작성 여부</option>
            </select>
            <span>=</span>
            <select className="w-20 rounded border p-2">
              <option>Y</option>
              <option>N</option>
            </select>
            <input
              type="number"
              placeholder="배"
              className="w-20 rounded border p-2"
            />
            <span>배</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-right">
          <button className="rounded bg-gray-500 px-4 py-2 text-white">
            추첨 진행 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomWinnersPopup;

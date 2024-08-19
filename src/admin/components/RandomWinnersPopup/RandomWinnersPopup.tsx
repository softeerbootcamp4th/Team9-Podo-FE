import React, { useState } from "react";
import useInputs from "../../../client/hooks/useInputs";

interface RandomPopupInterface {
  modalHandler: () => void;
}

type field = "reward" | "numWinners";
interface ItemChangesInterface {
  index: number;
  field: field;
  value: string;
}

const handlePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
  event.stopPropagation();
};

const RandomWinnersPopup = ({ modalHandler }: RandomPopupInterface) => {
  const [items, setItems] = useState([{ reward: "", numWinners: "", rank: 1 }]);
  const [weight, setWeight] = useState(1);
  const [totalWinners, setTotalWinners] = useState(100);

  const addItem = (index: number) => {
    setItems([...items, { reward: "", numWinners: "", rank: index }]);
  };

  const handleChange = ({ index, field, value }: ItemChangesInterface) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    );
    setItems(updatedItems);
  };

  const handleWeightChange = (value: number) => {
    setWeight(value);
  };

  const handleTotalChange = (value: number) => {
    setTotalWinners(value);
  };

  const getWinnersList = () => {
    const data = {
      eventRewardList: items,
      eventWeight: {
        times: weight,
        condition: "기대평 작성 여부",
      },
    };
    //data 백으로 전송
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={modalHandler}
    >
      <div
        className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg"
        onClick={(e) => handlePropagation(e)}
      >
        {/* Modal Title */}
        <h2 className="mb-4 text-2xl font-bold">추첨 진행</h2>

        {/* Input Section: 당첨 상품/인원 입력 */}
        <div className="mb-4">
          <p className="mb-2 font-semibold">당첨 상품/인원 입력</p>

          {/* Item List */}
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>{index + 1}</span>
                <input
                  type="text"
                  value={item.reward}
                  placeholder="항목"
                  onChange={(e) =>
                    handleChange({
                      index: index,
                      field: "reward" as field,
                      value: e.target.value,
                    })
                  }
                  className="flex-1 rounded border p-2"
                />
                <input
                  min={0}
                  type="number"
                  value={item.numWinners}
                  placeholder="인원"
                  onChange={(e) =>
                    handleChange({
                      index: index,
                      field: "numWinners" as field,
                      value: e.target.value,
                    })
                  }
                  className="w-20 rounded border p-2"
                />
                <span>명</span>
              </div>
            ))}
          </div>

          {items.length < 10 && (
            <button
              onClick={() => addItem(items.length + 1)}
              className="mt-2 rounded bg-gray-200 px-4 py-2 text-gray-700"
            >
              항목 추가
            </button>
          )}
        </div>

        {/* Total Count */}
        <div className="mb-4">
          <p className="font-semibold">
            총 {items.reduce((acc, item) => acc + Number(item.numWinners), 0)} /
            {totalWinners}명
          </p>
        </div>

        {/* Condition Section */}
        <div className="mb-4">
          <p className="mb-2 font-semibold">가중치 부여 조건</p>
          <div className="flex items-center justify-around">
            <div className="p-2">기대평 작성 여부</div>
            <span>=</span>
            <div className="p-2">Y</div>
            <div className="space-x-2">
              <input
                type="number"
                placeholder="배"
                className="w-20 rounded border p-2"
                onChange={(e) => handleWeightChange(Number(e.target.value))}
                value={weight}
              />
              <span>배</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-right">
          <button
            className="rounded bg-gray-500 px-4 py-2 text-white"
            onClick={getWinnersList}
          >
            추첨 진행 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomWinnersPopup;

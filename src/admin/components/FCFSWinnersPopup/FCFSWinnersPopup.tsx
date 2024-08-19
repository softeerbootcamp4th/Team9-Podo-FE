import React, { useState } from "react";

interface FCFSPopupInterface {
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

const FCFSWinnersPopup = ({ modalHandler }: FCFSPopupInterface) => {
  const [totalWinners, setTotalWinners] = useState(100);
  const [items, setItems] = useState([{ reward: "", numWinners: "", rank: 1 }]);

  const addItem = (index: number) => {
    setItems([...items, { reward: "", numWinners: "", rank: index }]);
  };

  const handleChange = ({ index, field, value }: ItemChangesInterface) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    );
    setItems(updatedItems);
  };

  const handleTotalChange = (value: number) => {
    setTotalWinners(value);
  };

  const postRewards = () => {
    const data = {
      eventRewardList: items,
      eventWeight: {
        times: 1,
        condition: "string",
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
        onClick={handlePropagation}
      >
        <h2 className="mb-4 text-2xl font-bold">당첨 관리</h2>

        <div className="mb-4">
          <p className="mb-2 font-semibold">당첨 상품/인원 입력</p>

          {items.map((item, index) => (
            <div key={index} className="mb-2 flex items-center space-x-2">
              <span>{index + 1}</span>
              <input
                type="text"
                value={item.reward}
                onChange={(e) =>
                  handleChange({
                    index: index,
                    field: "reward" as field,
                    value: e.target.value,
                  })
                }
                placeholder="항목"
                className="flex-1 rounded border p-2"
              />
              <input
                min={0}
                type="number"
                value={item.numWinners}
                onChange={(e) =>
                  handleChange({
                    index: index,
                    field: "numWinners" as field,
                    value: e.target.value,
                  })
                }
                placeholder="인원"
                className="w-20 rounded border p-2"
              />
              <span>명</span>
            </div>
          ))}

          <button
            onClick={() => addItem(items.length + 1)}
            className="rounded bg-gray-200 px-4 py-2 text-gray-700"
          >
            항목 추가
          </button>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold">
            총 {items.reduce((acc, item) => acc + Number(item.numWinners), 0)} /
            {totalWinners}명
          </p>
        </div>

        <div className="text-right">
          <button
            className="rounded bg-gray-500 px-4 py-2 text-white"
            onClick={postRewards}
          >
            설정 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default FCFSWinnersPopup;

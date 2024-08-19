import React, { useState } from "react";

const FCFSWinnersPopup: React.FC = () => {
  const [items, setItems] = useState([{ id: 1, name: "", count: 0 }]);
  const [totalWinners, setTotalWinners] = useState(100);

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: "", count: 0 }]);
  };

  const handleItemChange = (
    index: number,
    field: string,
    value: string | number,
  ) => {
    const newItems = [...items];
    (newItems[index] as any)[field] = value;
    setItems(newItems);
  };

  const handleTotalChange = (value: number) => {
    setTotalWinners(value);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">당첨 관리</h2>

        <div className="mb-4">
          <p className="mb-2 font-semibold">당첨 상품/인원 입력</p>

          {items.map((item, index) => (
            <div key={item.id} className="mb-2 flex items-center space-x-2">
              <span>{index + 1}</span>
              <input
                type="text"
                value={item.name}
                onChange={(e) =>
                  handleItemChange(index, "name", e.target.value)
                }
                placeholder="항목"
                className="flex-1 rounded border p-2"
              />
              <input
                type="number"
                value={item.count}
                onChange={(e) =>
                  handleItemChange(index, "count", parseInt(e.target.value))
                }
                placeholder="인원"
                className="w-20 rounded border p-2"
              />
              <span>명</span>
            </div>
          ))}

          <button
            onClick={handleAddItem}
            className="rounded bg-gray-200 px-4 py-2 text-gray-700"
          >
            항목 추가
          </button>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <p className="font-semibold">
            총 {items.reduce((acc, item) => acc + item.count, 0)} /{" "}
            {totalWinners}명
          </p>
        </div>

        <div className="text-right">
          <button className="rounded bg-gray-500 px-4 py-2 text-white">
            설정 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default FCFSWinnersPopup;

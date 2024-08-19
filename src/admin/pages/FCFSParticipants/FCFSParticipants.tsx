import React, { useState } from "react";
import FCFSWinnersPopup from "../../components/FCFSWinnersPopup/FCFSWinnersPopup";

type Participant = {
  id: number;
  식별번호: string;
  이름: string;
  전화번호: string;
  참여일시: string;
  당첨여부: string;
  등수: string;
};

type FCFSParticipantsProps = {
  participants: Participant[];
  selectedDate: string;
  onDateChange: (date: string) => void;
};
const onDateChange = () => {};
const selectedDate = "2024.08.19";
const participants = [
  {
    id: 1,
    식별번호: "00000001",
    이름: "김연진",
    전화번호: "01029292929",
    참여일시: "2024-09-02 15:00:01",
    당첨여부: "당첨",
    등수: "1",
  },
  {
    id: 2,
    식별번호: "00000002",
    이름: "정서린",
    전화번호: "01038383838",
    참여일시: "2024-09-02 15:00:03",
    당첨여부: "당첨",
    등수: "1",
  },
  {
    id: 3,
    식별번호: "00000003",
    이름: "권혁진",
    전화번호: "01047474747",
    참여일시: "2024-09-02 15:00:30",
    당첨여부: "당첨",
    등수: "1",
  },
  {
    id: 4,
    식별번호: "00000004",
    이름: "박수현",
    전화번호: "01058585858",
    참여일시: "2024-09-03 15:01:00",
    당첨여부: "당첨",
    등수: "2",
  },
  {
    id: 5,
    식별번호: "00000005",
    이름: "이민수",
    전화번호: "01069696969",
    참여일시: "2024-09-03 15:02:00",
    당첨여부: "낙첨",
    등수: "-",
  },
];

const PAGE_SIZE = 10;

const FCFSParticipants = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalHandler = () => {
    setIsModalOpen((current) => !current);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentPageItems = participants.slice(startIndex, endIndex);

  const totalPages = Math.ceil(participants.length / PAGE_SIZE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">참여자 관리</h2>
        <div>
          <button className="mr-2 rounded bg-gray-200 px-4 py-2">
            선착순 이벤트 1
          </button>
        </div>
      </div>

      {/* Date and Search */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => onDateChange()}
            className="mr-2 rounded border border-gray-300 px-4 py-2"
          />
          <button
            className="rounded bg-gray-400 px-4 py-2 text-white"
            onClick={onModalHandler}
          >
            등수 / 당첨자 관리
          </button>
        </div>
        <input
          type="text"
          placeholder="검색 (이름, 전화번호)"
          className="w-1/3 rounded border border-gray-300 px-4 py-2"
        />
      </div>

      {/* Table */}
      <div className="flex h-4/5 flex-col justify-between">
        <div>
          <table className="min-w-full border-gray-300 bg-white">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-r p-2">No.</th>
                <th className="border-r p-2">식별번호</th>
                <th className="border-r p-2">이름</th>
                <th className="border-r p-2">전화번호</th>
                <th className="border-r p-2">참여일시</th>
                <th className="border-r p-2">당첨여부</th>
                <th className="p-2">등수</th>
              </tr>
            </thead>
            <tbody>
              {currentPageItems.map((participant, index) => (
                <tr key={participant.id} className="border-t">
                  <td className="border-r p-2 text-center">
                    {startIndex + index + 1}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.식별번호}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.이름}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.전화번호}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.참여일시}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.당첨여부}
                  </td>
                  <td className="p-2 text-center">{participant.등수}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 페이지네이션 컨트롤 */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded bg-gray-300 px-4 py-2 text-gray-700"
          >
            이전
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded bg-gray-300 px-4 py-2 text-gray-700"
          >
            다음
          </button>
        </div>
      </div>

      {/* Export Button */}
      <div className="mt-4 flex justify-end">
        <button className="rounded bg-gray-400 px-4 py-2 text-white">
          Excel로 내보내기
        </button>
      </div>
      {isModalOpen && <FCFSWinnersPopup modalHandler={onModalHandler} />}
    </div>
  );
};

export default FCFSParticipants;

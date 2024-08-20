import React, { useEffect, useState } from "react";
import FCFSWinnersPopup from "../../components/FCFSWinnersPopup/FCFSWinnersPopup";
import { FCFSParticipant } from "../../types/event";
import { PAGE_SIZE } from "../../constants/constants";
import { fetchFCFSParticipants } from "../../api/fetch";

type FCFSParticipantsProps = {
  participants: FCFSParticipant[];
  selectedDate: string;
  onDateChange: (date: string) => void;
};
const onDateChange = () => {};
const selectedDate = "2024.08.19";

const FCFSParticipants = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPates] = useState(1);
  const [participants, setParticipants] = useState<FCFSParticipant[]>([]);

  const onModalHandler = () => {
    setIsModalOpen((current) => !current);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFCFSParticipants(currentPage - 1);

      setTotalPates(data.result.totalPage);
      setCurrentPage(data.result.currentPage + 1);
      setParticipants(data.result.arrivalUserList);
    };

    fetchData();
    console.log(participants);
  }, [currentPage, totalPages]);

  return (
    <div className="h-screen w-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">참여자 관리</h2>
        <div>
          <button className="mr-2 rounded bg-gray-200 px-4 py-2">
            선착순 이벤트
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
              {participants.map((participant, index) => (
                <tr key={participant.id} className="border-t">
                  <td className="border-r p-2 text-center">
                    {startIndex + index + 1}
                  </td>
                  <td className="border-r p-2 text-center">{participant.id}</td>
                  <td className="border-r p-2 text-center">
                    {participant.name}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.phoneNum}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.createdAt}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.reward}
                  </td>
                  <td className="p-2 text-center">{participant.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {totalPages === 0 && (
          <div className="font-kia-signature text-5xl flex-center">
            참여자가 없습니다
          </div>
        )}

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
            {currentPage} / {totalPages || 1}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages || totalPages === 0}
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

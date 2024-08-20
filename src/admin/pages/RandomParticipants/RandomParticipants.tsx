import React, { useState } from "react";
import RandomWinnersPopup from "../../components/RandomWinnersPopup/RandomWinnersPopup";
import { RandomParticipant } from "../../types/event";

type RandomParticipantsProps = {
  participants: RandomParticipant[];
};

const PAGE_SIZE = 10;

const RandomParticipants = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
            추첨 이벤트
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex items-center justify-between">
        <button
          className="rounded bg-gray-400 px-4 py-2 text-white"
          onClick={onModalHandler}
        >
          추첨 진행
        </button>
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
                <th className="border-r p-2">기대평 작성여부</th>
                <th className="border-r p-2">기대평</th>
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
                  <td className="border-r p-2 text-center">{participant.id}</td>
                  <td className="border-r p-2 text-center">
                    {participant.name}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.phoneNum}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.createAt}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.comment === null ? "N" : "Y"}
                  </td>
                  <td className="w-96 truncate border-r p-2 text-center">
                    {participant.comment ?? "-"}
                  </td>
                  <td className="border-r p-2 text-center">
                    {participant.reward ?? "-"}
                  </td>
                  <td className="p-2 text-center">-</td>
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
      {isModalOpen && <RandomWinnersPopup modalHandler={onModalHandler} />}
    </div>
  );
};

export default RandomParticipants;

const participants = [
  {
    id: 1,
    name: "김연진",
    phoneNum: "01029292929",
    createAt: "2024-09-02 15:00:01",
    comment: "2025 셀럽 이벤트 정말 기대됩니다!",
    reward: null,
  },
  {
    id: 2,
    name: "정서린",
    phoneNum: "01038383838",
    createAt: "2024-09-02 15:00:03",
    comment: null,
    reward: null,
  },
  {
    id: 3,
    name: "권혁진",
    phoneNum: "01047474747",
    createAt: "2024-09-02 15:00:30",
    comment: "세련된 디자인 기대돼요!",
    reward: null,
  },
  {
    id: 4,
    name: "박수현",
    phoneNum: "01058585858",
    createAt: "2024-09-02 15:01:00",
    comment: "매년 기다려지는 행사입니다!",
    reward: null,
  },
  {
    id: 5,
    name: "이민수",
    phoneNum: "01069696969",
    createAt: "2024-09-02 15:02:00",
    comment: "참여하게 되어 기쁩니다!",
    reward: null,
  },
  {
    id: 6,
    name: "홍길동",
    phoneNum: "01010101010",
    createAt: "2024-09-02 15:03:00",
    comment: "항상 기대되는 행사입니다!",
    reward: null,
  },
  {
    id: 7,
    name: "이영희",
    phoneNum: "01020202020",
    createAt: "2024-09-02 15:04:00",
    comment: "-",
    reward: null,
  },
  {
    id: 8,
    name: "박지수",
    phoneNum: "01030303030",
    createAt: "2024-09-02 15:05:00",
    comment: "재밌는 이벤트 기대할게요!",
    reward: null,
  },
  {
    id: 9,
    name: "최민호",
    phoneNum: "01040404040",
    createAt: "2024-09-02 15:06:00",
    comment: "-",
    reward: null,
  },
  {
    id: 10,
    name: "김민지",
    phoneNum: "01050505050",
    createAt: "2024-09-02 15:07:00",
    comment: "처음 참여하는 이벤트라 기대됩니다!",
    reward: null,
  },
  {
    id: 11,
    name: "한수연",
    phoneNum: "01060606060",
    createAt: "2024-09-02 15:08:00",
    comment: "즐거운 시간이 되길 바라요!",
    reward: null,
  },
  {
    id: 12,
    name: "김준호",
    phoneNum: "01070707070",
    createAt: "2024-09-02 15:09:00",
    comment: "-",
    reward: null,
  },
  {
    id: 13,
    name: "이하은",
    phoneNum: "01080808080",
    createAt: "2024-09-02 15:10:00",
    comment: "이벤트가 너무 기대돼요!",
    reward: null,
  },
  {
    id: 14,
    name: "정민호",
    phoneNum: "01090909090",
    createAt: "2024-09-02 15:11:00",
    comment: "매년 참여하는 이벤트입니다!",
    reward: null,
  },
  {
    id: 15,
    name: "서유리",
    phoneNum: "01011112222",
    createAt: "2024-09-02 15:12:00",
    comment: "-",
    reward: null,
  },
  {
    id: 16,
    name: "김현수",
    phoneNum: "01033334444",
    createAt: "2024-09-02 15:13:00",
    comment: "이벤트 준비해주셔서 감사합니다!",
    reward: null,
  },
  {
    id: 17,
    name: "이지훈",
    phoneNum: "01055556666",
    createAt: "2024-09-02 15:14:00",
    comment: "즐거운 이벤트 기대합니다!",
    reward: null,
  },
  {
    id: 18,
    name: "박준영",
    phoneNum: "01077778888",
    createAt: "2024-09-02 15:15:00",
    comment: "-",
    reward: null,
  },
  {
    id: 19,
    name: "김지우",
    phoneNum: "01099990000",
    createAt: "2024-09-02 15:16:00",
    comment: "항상 기대되는 이벤트입니다!",
    reward: null,
  },
  {
    id: 20,
    name: "윤서준",
    phoneNum: "01012345678",
    createAt: "2024-09-02 15:17:00",
    comment: "잘 부탁드립니다!",
    reward: null,
  },
  {
    id: 21,
    name: "최다은",
    phoneNum: "01087654321",
    createAt: "2024-09-02 15:18:00",
    comment: "-",
    reward: null,
  },
  {
    id: 22,
    name: "황수민",
    phoneNum: "01011223344",
    createAt: "2024-09-02 15:19:00",
    comment: "재미있게 즐길게요!",
    reward: null,
  },
];

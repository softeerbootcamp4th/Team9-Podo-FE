import React, { useState } from "react";
import RandomWinnersPopup from "../../components/RandomWinnersPopup/RandomWinnersPopup";

type Participant = {
  id: number;
  식별번호: string;
  이름: string;
  전화번호: string;
  참여일시: string;
  기대평작성여부: string;
  기대평: string;
  당첨여부: string;
  등수: string;
};

type RandomParticipantsProps = {
  participants: Participant[];
};

const RandomParticipants = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalHandler = () => {
    setIsModalOpen((current) => !current);
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
          placeholder="검색 (이름, 전화번호, 기대평 내용)"
          className="w-1/3 rounded border border-gray-300 px-4 py-2"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white">
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
            {participants.map((participant, index) => (
              <tr key={participant.id} className="border-t">
                <td className="border-r p-2 text-center">{index + 1}</td>
                <td className="border-r p-2 text-center">
                  {participant.식별번호}
                </td>
                <td className="border-r p-2 text-center">{participant.이름}</td>
                <td className="border-r p-2 text-center">
                  {participant.전화번호}
                </td>
                <td className="border-r p-2 text-center">
                  {participant.참여일시}
                </td>
                <td className="border-r p-2 text-center">
                  {participant.기대평작성여부}
                </td>
                <td className="max-w-xs truncate border-r p-2 text-center">
                  {participant.기대평}
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
    식별번호: "00000001",
    이름: "김연진",
    전화번호: "01029292929",
    참여일시: "2024-09-02 15:00:01",
    기대평작성여부: "Y",
    기대평: "2025 셀럽 이벤트 정말 기대됩니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 2,
    식별번호: "00000002",
    이름: "정서린",
    전화번호: "01038383838",
    참여일시: "2024-09-02 15:00:03",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 3,
    식별번호: "00000003",
    이름: "권혁진",
    전화번호: "01047474747",
    참여일시: "2024-09-02 15:00:30",
    기대평작성여부: "N",
    기대평: "세련된 디자인 기대돼요!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 4,
    식별번호: "00000004",
    이름: "박수현",
    전화번호: "01058585858",
    참여일시: "2024-09-02 15:01:00",
    기대평작성여부: "Y",
    기대평: "매년 기다려지는 행사입니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 5,
    식별번호: "00000005",
    이름: "이민수",
    전화번호: "01069696969",
    참여일시: "2024-09-02 15:02:00",
    기대평작성여부: "Y",
    기대평: "참여하게 되어 기쁩니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 6,
    식별번호: "00000006",
    이름: "홍길동",
    전화번호: "01010101010",
    참여일시: "2024-09-02 15:03:00",
    기대평작성여부: "Y",
    기대평: "항상 기대되는 행사입니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 7,
    식별번호: "00000007",
    이름: "이영희",
    전화번호: "01020202020",
    참여일시: "2024-09-02 15:04:00",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 8,
    식별번호: "00000008",
    이름: "박지수",
    전화번호: "01030303030",
    참여일시: "2024-09-02 15:05:00",
    기대평작성여부: "Y",
    기대평: "재밌는 이벤트 기대할게요!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 9,
    식별번호: "00000009",
    이름: "최민호",
    전화번호: "01040404040",
    참여일시: "2024-09-02 15:06:00",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 10,
    식별번호: "00000010",
    이름: "김민지",
    전화번호: "01050505050",
    참여일시: "2024-09-02 15:07:00",
    기대평작성여부: "Y",
    기대평: "처음 참여하는 이벤트라 기대됩니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 11,
    식별번호: "00000011",
    이름: "한수연",
    전화번호: "01060606060",
    참여일시: "2024-09-02 15:08:00",
    기대평작성여부: "Y",
    기대평: "즐거운 시간이 되길 바라요!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 12,
    식별번호: "00000012",
    이름: "김준호",
    전화번호: "01070707070",
    참여일시: "2024-09-02 15:09:00",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 13,
    식별번호: "00000013",
    이름: "이하은",
    전화번호: "01080808080",
    참여일시: "2024-09-02 15:10:00",
    기대평작성여부: "Y",
    기대평: "이벤트가 너무 기대돼요!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 14,
    식별번호: "00000014",
    이름: "정민호",
    전화번호: "01090909090",
    참여일시: "2024-09-02 15:11:00",
    기대평작성여부: "Y",
    기대평: "매년 참여하는 이벤트입니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 15,
    식별번호: "00000015",
    이름: "서유리",
    전화번호: "01011112222",
    참여일시: "2024-09-02 15:12:00",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 16,
    식별번호: "00000016",
    이름: "김현수",
    전화번호: "01033334444",
    참여일시: "2024-09-02 15:13:00",
    기대평작성여부: "Y",
    기대평: "이벤트 준비해주셔서 감사합니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 17,
    식별번호: "00000017",
    이름: "이지훈",
    전화번호: "01055556666",
    참여일시: "2024-09-02 15:14:00",
    기대평작성여부: "Y",
    기대평: "즐거운 이벤트 기대합니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 18,
    식별번호: "00000018",
    이름: "박준영",
    전화번호: "01077778888",
    참여일시: "2024-09-02 15:15:00",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 19,
    식별번호: "00000019",
    이름: "김지우",
    전화번호: "01099990000",
    참여일시: "2024-09-02 15:16:00",
    기대평작성여부: "Y",
    기대평: "항상 기대되는 이벤트입니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 20,
    식별번호: "00000020",
    이름: "윤서준",
    전화번호: "01012345678",
    참여일시: "2024-09-02 15:17:00",
    기대평작성여부: "Y",
    기대평: "잘 부탁드립니다!",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 21,
    식별번호: "00000021",
    이름: "최다은",
    전화번호: "01087654321",
    참여일시: "2024-09-02 15:18:00",
    기대평작성여부: "N",
    기대평: "-",
    당첨여부: "-",
    등수: "-",
  },
  {
    id: 22,
    식별번호: "00000022",
    이름: "황수민",
    전화번호: "01011223344",
    참여일시: "2024-09-02 15:19:00",
    기대평작성여부: "Y",
    기대평: "재미있게 즐길게요!",
    당첨여부: "-",
    등수: "-",
  },
];

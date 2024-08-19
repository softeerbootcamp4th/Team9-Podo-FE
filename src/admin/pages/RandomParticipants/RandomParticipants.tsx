import React from "react";

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
      당첨여부: "Y",
      등수: "1",
    },
    {
      id: 5,
      식별번호: "00000005",
      이름: "이민수",
      전화번호: "01069696969",
      참여일시: "2024-09-02 15:02:00",
      기대평작성여부: "Y",
      기대평: "참여하게 되어 기쁩니다!",
      당첨여부: "N",
      등수: "-",
    },
  ];

  return (
    <div className="bg-gray-100 p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">참여자 관리</h2>
        <div>
          <button className="mr-2 rounded bg-gray-200 px-4 py-2">
            추첨 이벤트
          </button>
          <button className="rounded bg-gray-400 px-4 py-2 text-white">
            추첨 진행
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="검색 (이름, 전화번호)"
          className="w-full rounded border border-gray-300 px-4 py-2"
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
    </div>
  );
};

export default RandomParticipants;

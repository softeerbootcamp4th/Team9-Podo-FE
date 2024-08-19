import React from "react";

const EventManagement: React.FC = () => {
  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">이벤트 리스트</h1>
        <button className="rounded bg-blue-500 px-4 py-2 text-white">
          이벤트 추가
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="검색 (제목)"
          className="w-1/3 rounded border p-2"
        />
      </div>

      {/* Event List Table */}
      <table className="w-full rounded-lg border bg-white">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-3 text-left">No.</th>
            <th className="p-3 text-left">제목</th>
            <th className="p-3 text-left">유형</th>
            <th className="p-3 text-left">시작일</th>
            <th className="p-3 text-left">종료일</th>
            <th className="p-3 text-left">반복</th>
            <th className="p-3 text-left">당첨인원</th>
            <th className="p-3 text-left">참여자 관리</th>
            <th className="p-3 text-left">승인 여부</th>
            <th className="p-3 text-left">최종수정일</th>
            <th className="p-3 text-left">관리</th>
            <th className="p-3 text-left">GA</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Event Row */}
          <tr className="border-b">
            <td className="p-3">1</td>
            <td className="p-3">셀토스 선착순</td>
            <td className="p-3">선착순</td>
            <td className="p-3">2024-09-02 09:00</td>
            <td className="p-3">2024-09-06 23:59</td>
            <td className="p-3">매일</td>
            <td className="p-3">100</td>
            <td className="p-3">
              <button className="rounded bg-gray-200 p-2">바로가기</button>
            </td>
            <td className="p-3">
              <span className="rounded bg-yellow-500 px-2 py-1 text-white">
                대기
              </span>
            </td>
            <td className="p-3">2024-09-01 08:39</td>
            <td className="flex space-x-2 p-3">
              <button className="rounded bg-blue-500 px-2 py-1 text-white">
                수정
              </button>
              <button className="rounded bg-red-500 px-2 py-1 text-white">
                삭제
              </button>
            </td>
            <td className="p-3">
              <a href="#" className="text-blue-500">
                GA
              </a>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default EventManagement;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchEventList } from "../../api/fetch";
import { EventInfo } from "../../types/event";

const EventManagement: React.FC = () => {
  const navigate = useNavigate();
  const [eventList, setEventList] = useState<EventInfo[]>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchEventList();
      setEventList(response.result.eventList);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">이벤트 리스트</h1>
      </div>

      <div className="flex justify-between">
        <button
          className="h-14 w-48 shrink-0 rounded bg-gray-400 px-4 py-2 text-white"
          onClick={() => navigate("/create-event")}
        >
          이벤트 추가
        </button>

        <div className="mb-4 flex shrink-0 justify-end">
          <input
            type="text"
            placeholder="검색 (제목)"
            className="h-14 w-96 rounded border p-2"
          />
        </div>
      </div>

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
            <th className="p-3 text-left">최종수정일</th>
            <th className="p-3 text-left">관리</th>
            <th className="p-3 text-left">GA</th>
          </tr>
        </thead>
        <tbody>
          {eventList && eventList.length > 0 ? (
            eventList.map((event, index) => (
              <tr key={event.id} className="border-b">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{event.title}</td>
                <td className="p-3">
                  {event.eventType === "arrival" ? "선착순" : "추첨"}
                </td>
                <td className="p-3">{event.startAt}</td>
                <td className="p-3">{event.endAt}</td>
                <td className="p-3">
                  {event.repeatDay
                    ? "매일"
                    : event.repeatDay === null
                      ? "-"
                      : "반복 없음"}
                </td>
                <td className="p-3">
                  {event.eventRewardList.reduce(
                    (total, reward) => total + reward.numWinners,
                    0,
                  )}
                </td>
                <td className="p-3">
                  <button
                    onClick={() =>
                      navigate(
                        `${event.eventType === "arrival" ? "/fcfs-participants" : "/random-participants"}`,
                      )
                    }
                    className="rounded bg-gray-200 p-2"
                  >
                    바로가기
                  </button>
                </td>

                <td className="p-3">{event.updatedAt}</td>
                <td className="flex space-x-2 p-3">
                  <button
                    onClick={() =>
                      navigate("/create-event", {
                        state: { event: eventList[event.id - 1] },
                      })
                    }
                    className="rounded bg-gray-400 px-2 py-1 text-white"
                  >
                    수정
                  </button>
                </td>
                <td className="p-3">
                  <a href="#" className="">
                    GA
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="p-3 text-center">
                이벤트가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventManagement;

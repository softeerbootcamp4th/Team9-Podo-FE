import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchLogList } from "../../api/fetch";
import { LogInfo } from "../../types/event";
import { PAGE_SIZE } from "../../constants/constants";

const LogManagement: React.FC = () => {
  const [logList, setLogList] = useState<LogInfo[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPates] = useState(1);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchLogList(currentPage - 1);
      setLogList(response.result.adminLogList);
      setTotalPates(response.result.totalPage);
      setCurrentPage(response.result.currentPage + 1);
    };

    fetchData();
  }, [currentPage, totalPages]);

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">이벤트 리스트</h1>
      </div>

      <div className="flex justify-end">
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
            <th className="p-3 text-left">ID.</th>
            <th className="p-3 text-left">requestPath</th>
            <th className="p-3 text-left">requestHeader</th>
            <th className="p-3 text-left">requestBody</th>
          </tr>
        </thead>
        <tbody>
          {logList && logList.length > 0 ? (
            logList.map((log) => (
              <tr key={log.id} className="border-b">
                <td className="p-3">{log.id}</td>
                <td className="p-3">{log.requestPath}</td>
                <td className="p-3">{log.requestHeader}</td>
                <td className="p-3">{log.requestBody}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={12} className="p-3 text-center">
                로그가 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </table>
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
  );
};

export default LogManagement;

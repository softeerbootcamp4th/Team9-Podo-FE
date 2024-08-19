import React from "react";

const EventForm: React.FC = () => {
  return (
    <div className="mx-auto max-w-3xl rounded-md bg-gray-100 p-8">
      <h2 className="mb-6 text-2xl font-bold">신규 이벤트 등록</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* 이벤트 제목 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              이벤트 제목 *
            </label>
            <input
              type="text"
              placeholder="텍스트 입력"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 이벤트 URL */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              이벤트 URL *
            </label>
            <input
              type="text"
              placeholder="링크 입력"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 이벤트 설명 */}
          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium">
              이벤트 설명
            </label>
            <input
              type="text"
              placeholder="텍스트 입력"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 이벤트 유형 설정 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              이벤트 유형 설정 *
            </label>
            <div className="flex space-x-4">
              <button
                type="button"
                className="w-1/2 rounded border border-gray-300 bg-gray-200 p-2"
              >
                랜덤
              </button>
              <button
                type="button"
                className="w-1/2 rounded border border-gray-300 bg-gray-400 p-2 text-white"
              >
                선착순
              </button>
            </div>
          </div>

          {/* 총 당첨인원 설정 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              총 당첨인원 설정
            </label>
            <input
              type="number"
              placeholder="숫자 입력"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 시작일 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">시작일 *</label>
            <input
              type="datetime-local"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 종료일 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">종료일 *</label>
            <input
              type="datetime-local"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 이벤트 진행 시작 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              이벤트 진행 시각
            </label>
            <input
              type="time"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 반복 설정 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">반복 설정</label>
            <div className="flex items-center space-x-4">
              <input type="checkbox" className="form-checkbox" />
              <span>설정</span>
              <div className="flex space-x-2">
                {["매일", "월", "화", "수", "목", "금", "토", "일", "마다"].map(
                  (day, index) => (
                    <button
                      key={index}
                      type="button"
                      className="rounded border border-gray-300 bg-gray-200 p-2"
                    >
                      {day}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* OG Tag 이미지 */}
          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium">
              OG Tag 이미지
            </label>
            <input
              type="file"
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
        </div>

        {/* 등록 신청 버튼 */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-3 font-bold text-white"
          >
            등록 신청
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;

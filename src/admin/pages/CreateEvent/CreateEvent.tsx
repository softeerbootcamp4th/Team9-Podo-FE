import React, { MouseEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { EventInfo, EventPostInfo } from "../../types/event";
import { putFCFSEvent, putRandomEvent } from "../../api/fetch";

const convertToEventPostInfo = (event: EventInfo): EventPostInfo => {
  return {
    title: event.title,
    description: event.description,
    repeatDay: event.repeatDay,
    repeatTime: event.repeatTime,
    startAt: event.startAt,
    endAt: event.endAt,
    tagImage: event.tagImage,
  };
};

const EventForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const event = location.state?.event as EventInfo | undefined;

  const initialState: EventPostInfo = event
    ? convertToEventPostInfo(event)
    : {
        title: "",
        description: "",
        repeatDay: "0000000",
        repeatTime: "",
        startAt: "",
        endAt: "",
        tagImage: "",
      };

  const [formData, setFormData] = useState<EventPostInfo>(initialState);
  const [minEndDate, setMinEndDate] = useState<string>("");

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 16);
    setMinEndDate(formData.startAt || today);
  }, [formData.startAt]);

  useEffect(() => {
    console.log(formData);
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "repeatTime" && value.length === 5 ? `${value}:00` : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (event?.eventType === "arrival") putData(putFCFSEvent);
    else if (event?.eventType === "lots") putData(putRandomEvent);
    navigate("/");
  };

  const putData = async (putApi: Function) => {
    const response = await putApi(formData);
    console.log(response);
  };

  const toggleDay = (index: number) => {
    const newRepeatDay = formData.repeatDay!.split("");

    newRepeatDay[index] = newRepeatDay[index] === "1" ? "0" : "1";

    setFormData((prevState) => ({
      ...prevState,
      repeatDay: newRepeatDay.join(""),
    }));
  };

  const toggleAllDays = () => {
    const allSelected = formData.repeatDay === "1111111";
    const newRepeatDay = allSelected ? "0000000" : "1111111";
    setFormData((prevState) => ({
      ...prevState,
      repeatDay: newRepeatDay,
    }));
  };

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-gray-100 p-8 flex-center">
      <h2 className="text-2xl font-bold">신규 이벤트 등록</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          {/* 이벤트 제목 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              이벤트 제목 *
            </label>
            <input
              type="text"
              name="title"
              placeholder="텍스트 입력"
              value={formData.title}
              onChange={handleInputChange}
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
              name="description"
              placeholder="텍스트 입력"
              value={formData.description}
              onChange={handleInputChange}
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
                disabled
                className={`w-1/2 rounded border border-gray-300 ${
                  event?.eventType === "arrival" ? "bg-gray-200" : "bg-gray-400"
                } p-2`}
              >
                랜덤
              </button>
              <button
                type="button"
                disabled
                className={`w-1/2 rounded border border-gray-300 ${
                  event?.eventType === "arrival" ? "bg-gray-400" : "bg-gray-200"
                } p-2`}
              >
                선착순
              </button>
            </div>
          </div>

          {/* 이벤트 진행 시각 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">
              이벤트 진행 시각
            </label>
            <input
              type="time"
              name="repeatTime"
              disabled={event?.eventType !== "arrival"}
              value={formData?.repeatTime || ""}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 시작일 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">시작일 *</label>
            <input
              type="datetime-local"
              name="startAt"
              min={new Date().toISOString().slice(0, 16)}
              value={formData.startAt}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 종료일 */}
          <div className="col-span-1">
            <label className="mb-2 block text-sm font-medium">종료일 *</label>
            <input
              type="datetime-local"
              name="endAt"
              min={minEndDate}
              value={formData.endAt}
              onChange={handleInputChange}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>

          {/* 반복 설정 */}
          <div className="col-span-2">
            <label className="mb-2 block text-sm font-medium">반복 설정</label>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={formData.repeatDay === "1111111"}
                onChange={toggleAllDays}
                disabled={event?.eventType !== "arrival"}
              />
              <span className="text-nowrap text-sm">매일</span>
              <div className="flex space-x-2">
                {["월", "화", "수", "목", "금", "토", "일"].map(
                  (day, index) => (
                    <button
                      key={index}
                      type="button"
                      disabled={event?.eventType !== "arrival"}
                      className={`shrink-0 rounded border border-gray-300 p-2 ${
                        formData.repeatDay && formData.repeatDay[index] === "1"
                          ? "bg-blue-200"
                          : "bg-gray-200"
                      }`}
                      onClick={() => toggleDay(index)}
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
            onClick={handleSubmit}
            className="w-full rounded bg-gray-400 py-3 font-bold text-white"
          >
            등록 신청
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;

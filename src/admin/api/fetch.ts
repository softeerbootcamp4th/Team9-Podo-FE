import { ApiResponse } from "../types/api";
import { EventInfo, EventPostInfo } from "../types/event";

export const fetchEventList = async (): Promise<
  ApiResponse<{ eventList: EventInfo[] }>
> => {
  const response = await fetch("/admin/eventlist");

  return await response.json();
};

export const putRandomEvent = async (
  eventInfo: EventPostInfo,
): Promise<ApiResponse<EventInfo>> => {
  const response = await fetch("/admin/lots/config", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventInfo),
  });

  return await response.json();
};

export const putFCFSEvent = async (
  eventInfo: EventPostInfo,
): Promise<ApiResponse<EventInfo>> => {
  const response = await fetch("/admin/arrival/config", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventInfo),
  });

  return await response.json();
};

import { ApiResponse } from "../types/api";
import { EventInfo, FCFSParticipant, RandomParticipant } from "../types/event";

export const fetchEventList = async (): Promise<
  ApiResponse<{ eventList: EventInfo[] }>
> => {
  const response = await fetch("/admin/eventlist");

  return await response.json();
};

export const fetchFCFSParticipants = async (
  page: number,
): Promise<
  ApiResponse<{
    totalPage: number;
    currentPage: number;
    arrivalUserList: FCFSParticipant[];
  }>
> => {
  const response = await fetch(`/admin/arrival/applicationList?page=${page}`);

  return response.json();
};

export const fetchRandomParticipants = async (
  page: number,
): Promise<
  ApiResponse<{
    totalPage: number;
    currentPage: number;
    lotsUserList: RandomParticipant[];
  }>
> => {
  const response = await fetch(`/admin/lots/applicationList?page=${page}`);

  return response.json();
};

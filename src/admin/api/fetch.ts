import { ApiResponse } from "../types/api";
import {
  EventInfo,
  FCFSParticipant,
  RandomParticipant,
  EventPostInfo,
  RewardInterface,
  fetchLogForm,
} from "../types/event";

const RANDOM_URL = process.env.RANDOM_URL;

export const fetchEventList = async (): Promise<
  ApiResponse<{ eventList: EventInfo[] }>
> => {
  const response = await fetch(RANDOM_URL + "/admin/eventlist");

  return await response.json();
};

export const fetchLogList = async (
  page: number,
): Promise<ApiResponse<fetchLogForm>> => {
  const response = await fetch(RANDOM_URL + `/admin/log?page=${page}`);

  return await response.json();
};

export const putRandomEvent = async (
  eventInfo: FormData,
): Promise<ApiResponse<EventInfo>> => {
  const response = await fetch(RANDOM_URL + "/admin/lots/config", {
    method: "PUT",
    headers: {},
    body: eventInfo,
  });

  return await response.json();
};

export const putFCFSEvent = async (
  eventInfo: FormData,
): Promise<ApiResponse<EventInfo>> => {
  const response = await fetch(RANDOM_URL + "/admin/arrival/config", {
    method: "PUT",
    headers: {},
    body: eventInfo,
  });

  return await response.json();
};

interface FCFSParticipantInterface {
  page: number;
  createdAt?: string;
  phoneNum?: string;
}

export const fetchFCFSParticipants = async ({
  page,
  createdAt,
  phoneNum,
}: FCFSParticipantInterface): Promise<
  ApiResponse<{
    totalPage: number;
    currentPage: number;
    arrivalUserList: FCFSParticipant[];
  }>
> => {
  const response = await fetch(
    RANDOM_URL +
      `/admin/arrival/applicationList?page=${page}${createdAt ? `&createdAt=${createdAt}` : ""}${phoneNum ? `&phoneNum=${phoneNum}` : ""}`,
  );

  return response.json();
};

interface RandomParticipantInterface {
  page: number;
  phoneNum?: string;
}

export const fetchRandomParticipants = async ({
  page,
  phoneNum,
}: RandomParticipantInterface): Promise<
  ApiResponse<{
    totalPage: number;
    currentPage: number;
    lotsUserList: RandomParticipant[];
  }>
> => {
  const response = await fetch(
    RANDOM_URL +
      `/admin/lots/applicationList?page=${page}${phoneNum ? `&phoneNum=${phoneNum}` : ""}`,
  );

  return response.json();
};

export const putFCFSReward = async (
  rewardInfo: RewardInterface,
): Promise<ApiResponse<RewardInterface>> => {
  const response = await fetch(RANDOM_URL + "/admin/arrival/rewardconfig", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rewardInfo),
  });

  return await response.json();
};

export const putRandomReward = async (
  rewardInfo: RewardInterface,
): Promise<ApiResponse<RewardInterface>> => {
  const response = await fetch(RANDOM_URL + "/admin/lots/rewardconfig", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(rewardInfo),
  });

  return await response.json();
};

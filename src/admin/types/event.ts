export interface EventInfo {
  id: number;
  eventType: string;
  title: string;
  description: string;
  repeatDay: string | null;
  repeatTime: string | null;
  startAt: string;
  endAt: string;
  updatedAt: string;
  tagImage: string;
  eventRewardList: {
    rank: number;
    numWinners: number;
    reward: string;
  }[];
  eventWeight: {
    times: number;
    condition: string;
  };
}

export interface EventPostInfo {
  title: string;
  description: string;
  repeatDay: string | null;
  repeatTime: string | null;
  startAt: string;
  endAt: string;
  tagImage: File | null;
}

export interface fetchLogForm {
  totalPage: number;
  currentPage: number;
  adminLogList: LogInfo[];
}

export interface LogInfo {
  id: number;
  requestPath: string;
  requestHeader: string;
  requestBody: string;
}

export interface FCFSParticipant {
  id: number;
  name: string;
  phoneNum: string;
  rank: number;
  createdAt: string;
  reward: string;
}

export interface RandomParticipant {
  id: number;
  name: string;
  phoneNum: string;
  createAt: string;
  comment: string;
  reward: string;
}

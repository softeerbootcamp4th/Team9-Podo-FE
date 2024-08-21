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
  tagImage: string;
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

interface EventRewardInterface {
  rank: number;
  numWinners: number;
  reward: string;
}

interface EventWeightInterface {
  times: number;
  condition: string;
}

export interface RewardInterface {
  eventRewardList: EventRewardInterface[];
  eventWeight: EventWeightInterface;
}

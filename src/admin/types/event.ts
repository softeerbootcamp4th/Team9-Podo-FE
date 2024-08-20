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

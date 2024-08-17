export type InsideInfo = "light" | "dial" | "display" | "blow" | "headup";

export type InsideInfoData = {
  title: string;
  description: string;
};

export interface WordListResponse {
  wordList: Word[];
}

interface Word {
  keyword: string;
  count: number;
}

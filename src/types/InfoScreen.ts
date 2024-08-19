import { MouseEventHandler } from "react";

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

export interface EventSelectOptionsProps {
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  title: string;
  description: string;
  img: string;
  buttonInfo: {
    onClick: MouseEventHandler<HTMLButtonElement>;
    size: "big" | "small" | "long";
    isEnabled: boolean;
  };
}

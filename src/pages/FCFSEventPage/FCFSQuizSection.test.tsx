import React from "react";
import { render, screen } from "@testing-library/react";
import FCFSQuizSection from "./FCFSQuizSection";
import { quizInfo } from "../../mocks/data/FCFSEvent";

describe("FCFSQuizSection Component", () => {
  test("'오늘의 퀴즈' 문구와 문제가 화면에 표시되어야 한다.", () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const quizTitle = screen.getByRole("banner");
    expect(quizTitle).toBeInTheDocument();

    const quizContent = screen.getByRole("heading");
    expect(quizContent).toBeInTheDocument();
  });

  test("4가지 선택지가 화면에 표시되어야 한고 선택이 가능해야 한다.", () => {});

  test("정답을 제출하면 결과를 알리는 화면으로 이동해야 한다.", () => {});

  test("오답을 누르면 하단에 오답을 알리는 토스트가 표시되어야 한다.", () => {});
});

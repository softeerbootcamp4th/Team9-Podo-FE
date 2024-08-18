import React from "react";
import { render, screen, waitFor } from "../../../utils/TestUtils";
import FCFSQuizSection from "./FCFSQuizSection";
import { quizInfo } from "../../../mocks/data/FCFSEvent";
import userEvent from "@testing-library/user-event";

describe("FCFSQuizSection Component", () => {
  test("'오늘의 퀴즈' 문구와 문제가 화면에 표시되어야 한다.", () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const quizTitle = screen.getByRole("banner");
    expect(quizTitle).toBeInTheDocument();

    const quizContent = screen.getByRole("heading");
    expect(quizContent).toBeInTheDocument();
  });

  test("4가지 선택지가 화면에 표시되어야 한다.", () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const choices = screen.getAllByRole("listitem");
    expect(choices.length).toBe(4);
  });

  test("정답을 제출하면 결과를 알리는 화면으로 이동해야 한다.", async () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const quizChoices = screen.getAllByRole("listitem");
    const submitButton = screen.getByRole("button");

    userEvent.click(quizChoices[0]);
    userEvent.click(submitButton);

    waitFor(() => {
      const resultTitle = screen.findByText(
        "The 2025 셀토스의 원격 스마트 보조 기능을 통해 당첨을 확인해보세요!",
      );
      expect(resultTitle).toBeInTheDocument();
    });
  });

  test("오답을 제출하면 결과를 알리는 화면으로 이동하지 않아야 한다.", async () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const quizChoices = screen.getAllByRole("listitem");
    const submitButton = screen.getByRole("button");

    userEvent.click(quizChoices[1]);
    userEvent.click(submitButton);

    waitFor(() => {
      const resultTitle = screen.findByText(
        "The 2025 셀토스의 원격 스마트 보조 기능을 통해 당첨을 확인해보세요!",
      );
      expect(resultTitle).toBeInTheDocument();
    });
  });

  test("오답을 누르면 하단에 오답을 알리는 토스트가 표시되어야 한다.", () => {});
});

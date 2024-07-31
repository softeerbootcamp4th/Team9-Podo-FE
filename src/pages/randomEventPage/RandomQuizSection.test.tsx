import React from "react";
import { MemoryRouter, Route, Routes } from "react-router";
import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "@storybook/test";
import RandomQuizSection from "./RandomQuizSection";
import RandomEventResultPage from "../randomEventResultPage/RandomEventResultPage";
import userEvent from "@testing-library/user-event";

const renderWithRouter = (initialPath: string) => {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/event2/:quizIndex" element={<RandomQuizSection />} />
        <Route path="/event2/result" element={<RandomEventResultPage />} />
      </Routes>
    </MemoryRouter>,
  );
};

describe("RandomQuizSection", () => {
  test("RandomQuizSection 은 올바르게 랜더링되어야 한다.", () => {
    renderWithRouter("/event2/0");

    const option = screen.getByRole("region");
    expect(option).toBeInTheDocument();
  });

  test("Option 클릭 시 quizIndex 가 1 늘어나서 페이지가 움직여야 한다.", async () => {
    renderWithRouter("/event2/0");
    const button = screen.getByText("당장 앞지르고 빨리 달려나간다."); //첫 번째 질문의 1번 선택지

    await userEvent.click(button);

    waitFor(() => {
      expect(
        screen.getByText("메뉴얼을 정독하며 이 버튼, 저 버튼 눌러본다."), //두 번째 질문의 1번 선택지
      ).toBeInTheDocument();
    });
  });

  test("마지막 quizIndex에서는 Option 클릭 시 RandomEventResultPage 로 이동해야 한다.", async () => {
    renderWithRouter("/event2/3");
    const button = screen.getByText("연비, 성능, 옵션 등을 꼼꼼하게 따져본다."); //마지막 질문의 1번 선택지

    await userEvent.click(button);

    waitFor(() => {
      expect(screen.getByText("당신의 운잔자 유형은?")).toBeInTheDocument(); //결과 페이지의 header
    });
  });
});

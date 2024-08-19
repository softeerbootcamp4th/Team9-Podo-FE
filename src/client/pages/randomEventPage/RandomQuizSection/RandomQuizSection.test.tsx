import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import RandomQuizSection from "./RandomQuizSection";

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useOutletContext: jest.fn(),
}));

const mockQuizInfo = {
  question: "가장 좋아하는 색깔은 무엇인가요?",
  optionList: [
    { label: "Option1", content: "빨강" },
    { label: "Option2", content: "파랑" },
  ],
};

describe("RandomQuizSection", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.requireMock("react-router").useOutletContext.mockReturnValue({
      quizInfo: mockQuizInfo,
      onClick: mockOnClick,
    });
  });

  test("퀴즈 정보가 올바르게 렌더링 되어야 한다", () => {
    render(
      <MemoryRouter>
        <RandomQuizSection />
      </MemoryRouter>,
    );

    expect(
      screen.getByText("가장 좋아하는 색깔은 무엇인가요?"),
    ).toBeInTheDocument();

    expect(
      screen.getByText("가장 좋아하는 색깔은 무엇인가요?"),
    ).toBeInTheDocument();

    mockQuizInfo.optionList.forEach((option) => {
      expect(screen.getByText(option.content)).toBeInTheDocument();
    });
  });

  test("옵션 클릭 시 onClick 핸들러가 호출되어야 한다", async () => {
    render(
      <MemoryRouter>
        <RandomQuizSection />
      </MemoryRouter>,
    );

    const optionButton = screen.getByText("빨강");
    await userEvent.click(optionButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});

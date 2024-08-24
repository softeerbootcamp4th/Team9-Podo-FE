import React, { useContext } from "react";
import { MockContext, render, screen, waitFor } from "../../../utils/TestUtils";
import FCFSQuizSection from "./FCFSQuizSection";
import { quizInfo } from "../../../mocks/data/FCFSEvent";
import userEvent from "@testing-library/user-event";
import { MESSAGE } from "../../../constants/FCFSEventResultData";

jest.mock("../../../providers/AppProvider", () => ({
  useAppContext: jest.fn().mockImplementation(() => {
    return useContext(MockContext);
  }),
}));
const navigate = jest.fn();

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(() => {
    return navigate;
  }),
  useLocation: jest.fn().mockImplementation(() => {
    return {
      state: { leftTime: 0 },
    };
  }),
}));

Element.prototype.animate = jest.fn();

describe("FCFSQuizSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
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

    await userEvent.click(quizChoices[0]);
    await userEvent.click(submitButton);

    expect(navigate).toHaveBeenCalledWith("/event1/result", {
      state: { isWin: true, leftTime: 0 },
    });
  });

  test("오답을 제출하면 결과를 알리는 화면으로 이동하지 않아야 한다.", async () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const quizChoices = screen.getAllByRole("listitem");
    const submitButton = screen.getByRole("button");

    await userEvent.click(quizChoices[1]);
    await userEvent.click(submitButton);

    expect(navigate).not.toHaveBeenCalled();
  });

  test("오답을 누르면 하단에 오답을 알리는 토스트가 표시되어야 한다.", async () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const quizChoices = screen.getAllByRole("listitem");
    const submitButton = screen.getByRole("button");

    await userEvent.click(quizChoices[1]);
    await userEvent.click(submitButton);

    const errorToast = await screen.findByText(MESSAGE.WRONG_ANSWER);
    expect(errorToast).toBeInTheDocument();
  });

  test("정답을 선택하지 않고 제출버튼을 누르면 하단에 정답을 선택하지 않았음을 알리는 토스트가 표시되어야 한다.", async () => {
    render(<FCFSQuizSection quizInfo={quizInfo} />);

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);

    const errorToast = await screen.findByText(MESSAGE.NO_ANSWER);
    expect(errorToast).toBeInTheDocument();
  });
});

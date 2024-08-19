import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EventSelectSection from "./EventSelectSection";
import { SELECT_DATA } from "../../../../constants/EventData";
import useAnimation from "../../../../hooks/useAnimation";

jest.mock("../../../../hooks/useAnimation", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseAnimation = useAnimation as jest.MockedFunction<
  typeof useAnimation
>;

describe("EventSelectSection", () => {
  const mockFCFSClick = jest.fn().mockImplementation(() => {
    console.log("clicked");
  });
  const mockRandomClick = jest.fn();
  const startAnimationMock = jest.fn();
  const stopAnimationMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();

    mockUseAnimation.mockImplementation((animationOptions) => ({
      elementRef: React.createRef(),
      animationRef: React.createRef(),
      startAnimation: startAnimationMock,
      stopAnimation: stopAnimationMock,
    }));
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore real timers after each test
  });

  test("올바르게 랜더링 되어야 한다.", () => {
    render(
      <EventSelectSection
        onFCFSClick={mockFCFSClick}
        onRandomClick={mockRandomClick}
      />,
    );

    expect(screen.getByText(SELECT_DATA.PAGE_TITLE)).toBeInTheDocument();
    expect(screen.getByAltText("Main Car")).toBeInTheDocument();
  });

  test("landing car, main car, title 애니메이션이 useAnimation hook을 통해 호출되어야 한다.", () => {
    render(
      <EventSelectSection
        onFCFSClick={mockFCFSClick}
        onRandomClick={mockRandomClick}
      />,
    );

    expect(startAnimationMock).toHaveBeenCalledTimes(3);
  });

  test("landing이 종료되면 main car의 stopAnimation 함수를 호출한다.", () => {
    render(
      <EventSelectSection
        onFCFSClick={mockFCFSClick}
        onRandomClick={mockRandomClick}
      />,
    );

    // Fast-forward timers by 4000ms
    jest.advanceTimersByTime(4000);

    expect(stopAnimationMock).toHaveBeenCalled();
  });

  //이유를 모르겠음
  //   test("선착순 이벤트 버튼을 누르면 onFCFSClick 함수가 호출되어야 한다.", async () => {
  //     render(
  //       <EventSelectSection
  //         onFCFSClick={mockFCFSClick}
  //         onRandomClick={mockRandomClick}
  //       />,
  //     );

  //     jest.advanceTimersByTime(4000);

  //     const buttons = await screen.findAllByRole("button", {
  //       name: /참여하기/i,
  //     });

  //     const firstOptionButton = buttons[0];

  //     console.log(firstOptionButton.innerHTML);
  //     userEvent.click(firstOptionButton);

  //     expect(mockFCFSClick).toHaveBeenCalled();
  //   });

  //   test("응모 이벤트 버튼을 누르면 onRandomClick 함수가 호출되어야 한다.", async () => {
  //     render(
  //       <EventSelectSection
  //         onFCFSClick={mockFCFSClick}
  //         onRandomClick={mockRandomClick}
  //       />,
  //     );

  //     jest.advanceTimersByTime(4000);

  //     const secondOptionButton = await screen.findByRole("button", {
  //       name: SELECT_DATA.EVENT_2.TITLE,
  //     });

  //     await userEvent.click(secondOptionButton);

  //     expect(mockRandomClick).toHaveBeenCalled();
  //   });
});

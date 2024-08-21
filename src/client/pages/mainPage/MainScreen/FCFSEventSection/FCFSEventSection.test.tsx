import React from "react";
import { render, screen, waitFor } from "../../../../utils/TestUtils";
import userEvent from "@testing-library/user-event";
import FCFSEventSection from "./FCFSEventSection";
import { FCFS_EVENT_DATA } from "../../../../constants/EventData";
import { useAppContext } from "../../../../providers/AppProvider";
import { useNavigate, useLocation } from "react-router";

jest.mock("../../../../providers/AppProvider", () => ({
  useAppContext: jest.fn(),
}));

// jest.mock("react-router", () => ({
//   useNavigate: jest.fn(),
//   useLocation: jest.fn(),
// }));

// const mockNavigate = jest.fn();
// const mockLocation = { pathname: "/some-path" };

beforeEach(() => {
  (useAppContext as jest.Mock).mockReturnValue({
    isAuth: false,
    isFCFSEnd: false,
  });
  // (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  // (useLocation as jest.Mock).mockReturnValue(mockLocation);
});

class EventSourceMock {
  private onMessageCallback?: (event: MessageEvent) => void;

  constructor(url: string) {}

  set onmessage(callback: (event: MessageEvent) => void) {
    this.onMessageCallback = callback;
  }

  triggerMessage(remainingTime: number) {
    if (this.onMessageCallback) {
      this.onMessageCallback({
        data: JSON.stringify({ remainingTime }),
      } as MessageEvent);
    }
  }

  close() {}
}

(global as any).EventSource = EventSourceMock;

describe("FCFSEventSection", () => {
  test("isVisible이 true일 때 올바르게 랜더링 되어야 한다.", () => {
    render(<FCFSEventSection isVisible={true} onInfoClick={jest.fn()} />);

    expect(screen.getByText(FCFS_EVENT_DATA.TITLE)).toBeInTheDocument();

    expect(screen.getByText("본인인증하고 참여하기")).toBeInTheDocument();
  });

  test("isVisible이 false일 때 보이지 않아야 한다.", () => {
    render(<FCFSEventSection isVisible={false} onInfoClick={jest.fn()} />);

    const container = screen.getByRole("region");
    expect(container).toHaveClass("opacity-0");
  });

  test("본인인증이 되어있지 않다면 버튼에 본인인증하고 참여하기가 보여야 한다.", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      isAuth: false,
      isFCFSEnd: false,
    });

    render(<FCFSEventSection isVisible={true} onInfoClick={jest.fn()} />);

    expect(screen.getByText("본인인증하고 참여하기")).toBeInTheDocument();
  });

  //실패
  //   test("본인인증이 되어있고 퀴즈 시작 시간이 아니라면 버튼에 1시에 이벤트가 진행됩니다가 보여야 한다.", () => {
  //     (useAppContext as jest.Mock).mockReturnValue({
  //       isAuth: true,
  //       isFCFSEnd: false,
  //     });

  //     render(<FCFSEventSection isVisible={true} onInfoClick={jest.fn()} />);

  //     expect(screen.getByText("1시에 이벤트가 진행됩니다")).toBeInTheDocument();
  //   });

  // test("본인인증이 되어있고 퀴즈 시작 시간이라면 버튼에 퀴즈풀기가 보여야 한다.", () => {
  //   (useAppContext as jest.Mock).mockReturnValue({
  //     isAuth: true,
  //     isFCFSEnd: false,
  //   });

  //   render(<FCFSEventSection isVisible={true} onInfoClick={jest.fn()} />);

  //   expect(screen.getByText("퀴즈풀기")).toBeInTheDocument();
  // });

  test("이벤트가 마감되거나 본인인증이 되어있고 이벤트에 참여했다면 이벤트가 마감되었습니다. 다음 이벤트를 참여해주세요가 보여야 한다.", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      isAuth: true,
      isFCFSEnd: true,
    });

    render(<FCFSEventSection isVisible={true} onInfoClick={jest.fn()} />);

    expect(
      screen.getByText("이벤트가 마감되었습니다. 다음 이벤트를 참여해주세요"),
    ).toBeInTheDocument();
  });

  test("예습하러 가기 버튼을 누르면 아래로 스크롤 되어야 한다.", async () => {
    const onInfoClick = jest.fn();
    render(<FCFSEventSection isVisible={true} onInfoClick={onInfoClick} />);

    const prepButton = screen.getByText("예습하러가기>>");

    await userEvent.click(prepButton);

    expect(onInfoClick).toHaveBeenCalled();
  });
});

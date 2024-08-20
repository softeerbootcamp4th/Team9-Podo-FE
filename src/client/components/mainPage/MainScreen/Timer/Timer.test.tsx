// Timer.test.tsx
import React from "react";
import { render, screen, act } from "@testing-library/react";
import Timer from "./Timer";

// Mock useTimer hook
jest.mock("../../../../hooks/useTimer", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((initialTime: number) => {
    const hours = String(
      Math.floor((initialTime / (1000 * 60 * 60)) % 24),
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((initialTime / (1000 * 60)) % 60),
    ).padStart(2, "0");
    const seconds = String(Math.floor((initialTime / 1000) % 60)).padStart(
      2,
      "0",
    );

    return {
      reset: jest.fn(),
      hours,
      minutes,
      seconds,
    };
  }),
}));

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

describe("Timer", () => {
  test("initTime에 맞게 올바르게 랜더링 되어야 한다.", () => {
    const onEndHandler = jest.fn();
    render(<Timer onEndHandler={onEndHandler} />);

    // Check if the Timer component renders the expected time
    // expect(screen.getByText("00:00:00")).toBeInTheDocument();
  });

  // test("서버 이벤트를 통해 받아온 시간을 올바르게 표시해야 한다.", () => {});

  // test("타이머가 끝나면 onEndHandler가 호출되어야 한다.", () => {});
});

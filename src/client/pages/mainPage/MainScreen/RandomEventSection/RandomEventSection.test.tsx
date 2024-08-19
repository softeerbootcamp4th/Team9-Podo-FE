import React from "react";
import { render, screen } from "@testing-library/react";
import RandomEventSection from "./RandomEventSection";
import { useNavigate } from "react-router";
import {
  RANDOM_EVENT_DATA,
  RANDOM_PERIOD_INFO,
  RANDOM_PRIZE_INFO,
  RANDOM_STEPS,
} from "../../../../constants/EventData";
import { useAppContext } from "../../../../providers/AppProvider";

jest.mock("../../../../providers/AppProvider", () => ({
  useAppContext: jest.fn(),
}));

jest.mock("react-router", () => ({
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();

beforeEach(() => {
  (useAppContext as jest.Mock).mockReturnValue({
    isAuth: false,
    isRandomEnd: false,
  });
  (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
});

describe("RandomEventSection", () => {
  test("isVisible이 true일 때 올바르게 랜더링 되어야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);

    expect(screen.getByText(RANDOM_EVENT_DATA.TITLE)).toBeInTheDocument();

    RANDOM_PERIOD_INFO.forEach((info) => {
      expect(screen.getByText(info.TITLE)).toBeInTheDocument();
      expect(screen.getByText(info.DETAILS)).toBeInTheDocument();
      if (info.NOTE) {
        expect(screen.getByText(info.NOTE)).toBeInTheDocument();
      }
    });

    RANDOM_PRIZE_INFO.forEach((prize) => {
      expect(screen.getByText(prize)).toBeInTheDocument();
    });

    RANDOM_STEPS.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });

    expect(screen.getByText("본인인증하고 참여하기")).toBeInTheDocument();
  });

  test("isVisible이 false일 때 보이지 않아야 한다.", () => {
    render(<RandomEventSection isVisible={false} />);

    const container = screen.getByRole("region");
    expect(container).toHaveClass("opacity-0");
  });

  test("본인인증이 되어있지 않다면 버튼에 본인인증하고 참여하기가 보여야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);

    expect(screen.getByText("본인인증하고 참여하기")).toBeInTheDocument();
  });

  test("본인인증이 되어있다면 참여하기가 보여야 한다.", () => {
    (useAppContext as jest.Mock).mockReturnValue({
      isAuth: true,
      isRandomEnd: false,
    });

    render(<RandomEventSection isVisible={true} />);

    expect(screen.getByText("참여하기")).toBeInTheDocument();
  });
});

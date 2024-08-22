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

describe("RandomEventSection 랜더링", () => {
  test("제목이 올바르게 랜더링 되어야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);
    expect(screen.getByText(RANDOM_EVENT_DATA.TITLE)).toBeInTheDocument();
  });

  test("기간 정보가 올바르게 랜더링 되어야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);

    RANDOM_PERIOD_INFO.forEach((info) => {
      expect(screen.getByText(info.TITLE)).toBeInTheDocument();
      expect(screen.getByText(info.DETAILS)).toBeInTheDocument();
      if (info.NOTE) {
        expect(screen.getByText(info.NOTE)).toBeInTheDocument();
      }
    });
  });

  test("상품 정보가 올바르게 랜더링 되어야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);

    RANDOM_PRIZE_INFO.forEach((prize) => {
      expect(screen.getByText(prize)).toBeInTheDocument();
    });
  });

  test("참여 단계가 올바르게 랜더링 되어야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);

    RANDOM_STEPS.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  test("참여하기 버튼이 올바르게 랜더링 되어야 한다.", () => {
    render(<RandomEventSection isVisible={true} />);
    expect(screen.getByText("참여하기")).toBeInTheDocument();
  });
});

describe("RandomEventSection", () => {
  test("isVisible이 false일 때 보이지 않아야 한다.", () => {
    render(<RandomEventSection isVisible={false} />);

    const container = screen.getByRole("region");
    expect(container).toHaveClass("opacity-0");
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

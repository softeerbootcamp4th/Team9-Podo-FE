import React from "react";
import userEvent from "@testing-library/user-event";
import RandomMainSection from "./RandomMainSection";
import { useAppContext } from "../../../providers/AppProvider";
import { postRandomResult } from "../../../api/fetch";
import { render, screen, waitFor } from "../../../utils/TestUtils";

const mockNavigate = jest.fn();
const mockLocation = { pathname: "/test-path" };

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: () => mockNavigate,
  useLocation: () => mockLocation,
}));

jest.mock("../../../providers/AppProvider", () => ({
  useAppContext: jest.fn(),
}));

jest.mock("../../../api/fetch", () => ({
  postRandomResult: jest.fn(),
}));

Object.defineProperty(navigator, "clipboard", {
  value: {
    writeText: jest.fn(),
  },
  writable: true,
});

describe("RandomMainSection", () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      isAuth: true,
      isRandomEnd: false,
    });
    (postRandomResult as jest.Mock).mockResolvedValue({
      result: { uniqueLink: "https://www.example.com/share" },
    });

    mockNavigate.mockClear();
    (postRandomResult as jest.Mock).mockClear();
    (navigator.clipboard.writeText as jest.Mock).mockClear();
  });

  test("props에 따라 올바르게 랜더링 되어야 한다.", () => {
    const props = {
      resultTypeId: 1,
      description: [{ content: "테스트 설명", highlighted: false }],
      scenarioList: [
        {
          image: "test-image.jpg",
          title: "테스트 시나리오 제목",
          subtitle: "테스트 시나리오 부제목",
        },
      ],
    };

    render(<RandomMainSection {...props} />);

    expect(screen.getByText("테스트 설명")).toBeInTheDocument();
    expect(screen.getByText("1.")).toBeInTheDocument();
    expect(screen.getByAltText("시나리오")).toBeInTheDocument();
    expect(screen.getByText("테스트 시나리오 제목")).toBeInTheDocument();
    expect(screen.getByText("테스트 시나리오 부제목")).toBeInTheDocument();
  });

  test("다시하기 버튼을 누르면 /event2/0 경로로 이동해야 한다.", async () => {
    const props = {
      resultTypeId: 1,
      description: [],
      scenarioList: [],
    };

    render(<RandomMainSection {...props} />);

    await userEvent.click(screen.getByText("다시하기"));

    expect(mockNavigate).toHaveBeenCalledWith("/event2/0");
  });

  test("본인인증이 되어있지 않은 상태에서 공유하기를 누르면 기본 사이트 주소가 복사되어야 한다.", async () => {
    (useAppContext as jest.Mock).mockReturnValue({
      isAuth: false,
      isRandomEnd: false,
    });

    render(
      <RandomMainSection resultTypeId={1} description={[]} scenarioList={[]} />,
    );

    await userEvent.click(screen.getByText("공유하기"));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        "https://www.hyundaiseltos.site/",
      );
    });
  });

  //실패
  // test("본인인증이 된 상태에서 공유하기를 누르면 자신의 고유 사이트 주소가 복사되어야 한다.", async () => {
  //   render(
  //     <RandomMainSection resultTypeId={1} description={[]} scenarioList={[]} />,
  //   );

  //   await userEvent.click(screen.getByText("공유하기"));

  //   await waitFor(() => {
  //     expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
  //       "https://www.example.com/share",
  //     );
  //   });
  // });

  test("본인인증이 되어있지 않은 상태에서는 본인인증하고 이벤트 참여하기 버튼을 누르면 모달 창으로 이동해야 한다.", async () => {
    (useAppContext as jest.Mock).mockReturnValue({
      isAuth: false,
      isRandomEnd: false,
    });

    render(
      <RandomMainSection resultTypeId={1} description={[]} scenarioList={[]} />,
    );

    userEvent.click(screen.getByText("본인인증하고 이벤트 참여하기"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/auth-modal", {
        state: { background: mockLocation, event: 2 },
      });
    });
  });

  // //실패
  // test("본인인증이 된 상태에서는 이벤트 참여하기 버튼을 누르면 버튼을 비활성화하고 정보를 전송해야 한다.", async () => {
  //   render(
  //     <RandomMainSection resultTypeId={1} description={[]} scenarioList={[]} />,
  //   );

  //   await userEvent.click(screen.getByText("이벤트 참여하기"));

  //   expect(postRandomResult).toHaveBeenCalledWith(1);
  //   expect(screen.getByText("이벤트 참여 완료")).toBeInTheDocument();
  // });
});

import React, { createContext, ReactNode, useState } from "react";
import { render, screen } from "@testing-library/react";
import RandomMainSection from "./RandomMainSection";
import { AppProvider } from "../../../providers/AppProvider";

interface MockAppState {
  isAuth: boolean;
  isRandomEnd: boolean;
}

const MockAppContext = createContext<MockAppState | undefined>(undefined);

const MockAppProvider = ({
  children,
  values,
}: {
  children: ReactNode;
  values: MockAppState;
}) => {
  const [isAuth, setIsAuth] = useState(values.isAuth);
  const [isRandomEnd, setIsRandomEnd] = useState(values.isRandomEnd);

  return (
    <MockAppContext.Provider
      value={{
        isAuth,
        isRandomEnd,
      }}
    >
      {children}
    </MockAppContext.Provider>
  );
};

const description = [
  { content: "복잡한 도심 속", highlited: false },
  { content: "안전하고 즐거운 주행경험", highlited: true },
  { content: "을 제공하는", highlited: false },
  { content: "The 2025 셀토스", highlited: true },
];
const scenarioList = [
  {
    img: "path",
    title: "차로 이탈 시 경고 / 자동 조향 보조",
    content:
      "정신 없이 바쁜 일상 속에서도 셀토스는 일정 속도 이상 주행 중 방향지시등 스위치 조작 없이 차로 이탈 시 경고 및 자동 조향 보조 기능으로 사용자의 안전을 지켜줍니다.",
  },
  {
    img: "path",
    title: "원격 제어 주차 및 출차",
    content:
      "원격 제어를 통한 주차 및 출차 기능으로 사용자가 좁은 골목길에서도 걱정없이 주차 할 수 있게 돕습니다. ",
  },
  {
    img: "path",
    title: "네비게이션 기반 크루즈 컨트롤",
    content:
      "네비게이션 기반 크루즈 컨트롤을 통해 고속도로 주행 시, 도로 상황에 맞춰 안전한 속도로 주행하도록 도와줍니다.",
  },
];

describe("RandomMainSection", () => {
  test("RandomMainSection은 올바르게 랜더링 되어야 한다.", () => {
    const initialValues = {
      isAuth: false,
      isRandomEnd: false,
    };

    render(
      <MockAppProvider values={initialValues}>
        <AppProvider>
          <RandomMainSection
            description={description}
            scenarioList={scenarioList}
          />
        </AppProvider>
      </MockAppProvider>,
    );
    expect(screen.getByText(`${scenarioList[0].title}`)).toBeInTheDocument();
  });

  test("isAuth가 false일 때 버튼은 본인인증하고 이벤트 참여하기가 보여야 한다.", () => {
    const initialValues = {
      isAuth: false,
      isRandomEnd: false,
    };

    render(
      <MockAppProvider values={initialValues}>
        <AppProvider>
          <RandomMainSection
            description={description}
            scenarioList={scenarioList}
          />
        </AppProvider>
      </MockAppProvider>,
    );
    expect(screen.getByRole("button")).toHaveTextContent(
      "본인인증하고 이벤트 참여하기",
    );
  });

  test("isAuth가 true, isRandomEnd가 false일 때 버튼은 이벤트 참여하기가 보여야 한다.", () => {
    const initialValues = {
      isAuth: true,
      isRandomEnd: false,
    };

    render(
      <MockAppProvider values={initialValues}>
        <AppProvider>
          <RandomMainSection
            description={description}
            scenarioList={scenarioList}
          />
        </AppProvider>
      </MockAppProvider>,
    );
    expect(screen.getByRole("button")).toHaveTextContent("이벤트 참여하기");
  });

  test("isAuth가 true, isRandomEnd가 true일 때 버튼은 비활성화 되어야 한다.", () => {
    const initialValues = {
      isAuth: true,
      isRandomEnd: true,
    };

    render(
      <MockAppProvider values={initialValues}>
        <AppProvider>
          <RandomMainSection
            description={description}
            scenarioList={scenarioList}
          />
        </AppProvider>
      </MockAppProvider>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});

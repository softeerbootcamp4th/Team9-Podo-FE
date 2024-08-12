import React, { createContext, ReactNode, useState } from "react";
import { screen } from "@testing-library/react";
import { AppProvider, useAppContext } from "../../../providers/AppProvider";
import RandomMainSection from "./RandomMainSection";
import { render } from "../../../utils/test-utils";

interface MockAppState {
  isAuth: boolean;
  isRandomEnd: boolean;
}

const MockAppContext = createContext<MockAppState | undefined>(undefined);

const MockAppProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: MockAppState;
}) => {
  const [isAuth, setIsAuth] = useState(value.isAuth);
  const [isRandomEnd, setIsRandomEnd] = useState(value.isRandomEnd);

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
  { content: "복잡한 도심 속", highlighted: false },
  { content: "안전하고 즐거운 주행경험", highlighted: true },
  { content: "을 제공하는", highlighted: false },
  { content: "The 2025 셀토스", highlighted: true },
];
const scenarioList = [
  {
    image: "path",
    title: "차로 이탈 시 경고 / 자동 조향 보조",
    subtitle:
      "정신 없이 바쁜 일상 속에서도 셀토스는 일정 속도 이상 주행 중 방향지시등 스위치 조작 없이 차로 이탈 시 경고 및 자동 조향 보조 기능으로 사용자의 안전을 지켜줍니다.",
  },
  {
    image: "path",
    title: "원격 제어 주차 및 출차",
    subtitle:
      "원격 제어를 통한 주차 및 출차 기능으로 사용자가 좁은 골목길에서도 걱정없이 주차 할 수 있게 돕습니다. ",
  },
  {
    image: "path",
    title: "네비게이션 기반 크루즈 컨트롤",
    subtitle:
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
      <AppProvider>
        <MockAppProvider value={initialValues}>
          <RandomMainSection
            description={description}
            scenarioList={scenarioList}
          />
        </MockAppProvider>
      </AppProvider>,
    );
    expect(screen.getByText(`${scenarioList[0].title}`)).toBeInTheDocument();
  });

  test("isAuth가 false일 때 버튼은 본인인증하고 이벤트 참여하기가 보여야 한다.", () => {
    const initialValues = {
      isAuth: false,
      isRandomEnd: false,
    };

    render(
      <MockAppProvider value={initialValues}>
        <AppProvider>
          <RandomMainSection
            description={description}
            scenarioList={scenarioList}
          />
        </AppProvider>
      </MockAppProvider>,
    );
    expect(
      screen.getByText("본인인증하고 이벤트 참여하기"),
    ).toBeInTheDocument();
  });

  // test("isAuth가 true, isRandomEnd가 false일 때 버튼은 이벤트 참여하기가 보여야 한다.", () => {
  //   const initialValues = {
  //     isAuth: true,
  //     isRandomEnd: false,
  //   };

  //   render(
  //     <AppProvider>
  //       <MockAppProvider value={initialValues}>
  //         <RandomMainSection
  //           description={description}
  //           scenarioList={scenarioList}
  //         />
  //       </MockAppProvider>
  //     </AppProvider>,
  //   );
  //   expect(screen.getByText("이벤트 참여하기")).toBeInTheDocument();
  // });

  // test("isAuth가 true, isRandomEnd가 true일 때 버튼은 비활성화 되어야 한다.", () => {
  //   const initialValues = {
  //     isAuth: true,
  //     isRandomEnd: true,
  //   };

  //   render(
  //     <AppProvider>
  //       <MockAppProvider value={initialValues}>
  //         <RandomMainSection
  //           description={description}
  //           scenarioList={scenarioList}
  //         />
  //       </MockAppProvider>
  //     </AppProvider>,
  //   );
  //   expect(screen.getByRole("button")).toBeDisabled();
  // });
});

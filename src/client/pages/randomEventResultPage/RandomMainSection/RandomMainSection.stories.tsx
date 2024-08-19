import React from "react";
import { StoryFn, StoryContext } from "@storybook/react";
import { AppProvider } from "../../../providers/AppProvider";
import RandomMainSection from "./RandomMainSection";
import { MemoryRouter } from "react-router";

export default {
  component: RandomMainSection,
  title: "random/RandomMainSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  decorators: [
    (Story: StoryFn, context: StoryContext) => {
      return (
        <AppProvider>
          <MemoryRouter>
            <Story {...context} />
          </MemoryRouter>
        </AppProvider>
      );
    },
  ],
  argTypes: {
    isAuth: { control: "boolean" },
    isFCFSEnd: { control: "boolean" },
  },
};

export const Main = {
  args: {
    isAuth: false,
    isFCFSEnd: false,
    description: [
      "복잡한 도심 속 ",
      "안전하고 즐거운 주행경험",
      "을 제공하는 ",
      "The 2025 셀토스",
    ],
    scenarioList: [
      {
        image: "path",
        title: "차로 이탈 시 경고 / 자동 조항 보조",
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
    ],
  },
};

import React from "react";
import RandomQuizSection from "./RandomQuizSection";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import RandomEventResultPage from "../randomEventResultPage/RandomEventResultPage";

export default {
  component: RandomQuizSection,
  title: "RandomQuizSection",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

interface pathInterface {
  initialPath: string;
}

const Template = ({ initialPath }: pathInterface) => (
  <MemoryRouter initialEntries={[initialPath]}>
    <Routes>
      <Route path="/event2/:quizIndex" element={<RandomQuizSection />} />
      <Route path="/event2/result" element={<RandomEventResultPage />} />
    </Routes>
  </MemoryRouter>
);

export const Main = Template.bind({});
Main.args = {
  initialPath: "/event2/0",
};

export const WithSelectedOption = Template.bind({});
WithSelectedOption.args = {
  initialPath: "/event2/0",
};

// 추가로 다른 인덱스를 테스트하려면
export const AnotherIndex = Template.bind({});
AnotherIndex.args = {
  initialPath: "/event2/1",
};

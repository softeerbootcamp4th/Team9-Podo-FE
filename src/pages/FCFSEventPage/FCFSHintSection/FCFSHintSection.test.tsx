import React from "react";
import { render, screen } from "../../../utils/TestUtils";
import FCFSHintSection from "./FCFSHintSection";

describe("FCFSHintSection Component", () => {
  test("화면에 7개의 설명 요소가 표시되어야 한다.", () => {
    render(<FCFSHintSection />);

    const expScreen = screen.getAllByRole("listitem");
    expect(expScreen.length).toBe(7);
  });
});

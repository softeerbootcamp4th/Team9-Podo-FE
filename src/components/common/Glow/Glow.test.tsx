import React from "react";
import { render, screen } from "../../../utils/TestUtils";
import Glow from "./Glow";
import { glowFadeOptions, glowOptions } from "../../../styles/options";
import { fadeIn, randomGlow } from "../../../styles/keyframes";

Element.prototype.animate = jest.fn().mockReturnValue({
  finished: Promise.resolve(true),
});

describe("Glow Component", () => {
  test("글로우 3개가 렌더링 되야 한다.", () => {
    render(<Glow />);

    const glowElementArray = screen.getAllByRole("img", {
      name: /glow-effect/i,
    });

    expect(glowElementArray.length).toBe(3);
  });

  test("글로우가 1초 간격으로 나타나야 한다.", () => {
    render(<Glow />);

    const glowElemntArray = screen.getAllByRole("img", {
      name: /glow-effect/i,
    });

    glowElemntArray.map((glowElemnt, index) => {
      expect(glowElemnt.animate).toHaveBeenCalledWith(fadeIn, {
        ...glowFadeOptions,
        delay: (index + 1) * 1000,
      });
    });
  });

  test("글로우 밝기가 +- 10%에서 랜덤으로 밝아졌다 어두워졌다 해야 한다.", async () => {
    render(<Glow />);

    const glowElemntArray = screen.getAllByRole("img", {
      name: /glow-effect/i,
    });

    await Promise.all(
      glowElemntArray.map((glowElemnt, index) => {
        expect(glowElemnt.animate).toHaveBeenCalledWith(fadeIn, {
          ...glowFadeOptions,
          delay: (index + 1) * 1000,
        });
      }),
    );

    glowElemntArray.map((glowElemnt) => {
      expect(glowElemnt.animate).toHaveBeenCalledWith(randomGlow, glowOptions);
    });
  });
});

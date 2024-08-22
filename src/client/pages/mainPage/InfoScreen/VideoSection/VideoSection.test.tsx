import React from "react";
import { act, render, screen } from "../../../../utils/TestUtils";
import VideoSection from "./VideoSection";

HTMLMediaElement.prototype.pause = jest.fn();
HTMLMediaElement.prototype.play = jest.fn();

IntersectionObserver = jest.fn().mockImplementation((callback) => {
  return {
    observe: jest.fn((element) => {
      callback([
        {
          isIntersecting: false,
          target: element,
          intersectionRect: { top: 0, left: 0 },
        },
      ]);
    }),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
});

Element.prototype.scrollTo = jest.fn();

describe("VideoSection component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Video가 화면에 보여야 한다.", () => {
    render(<VideoSection />);

    const video = screen.getByRole("presentation");

    expect(video).toBeInTheDocument();
    expect(video).toHaveProperty("paused", true);
  });

  test("VideoSection에 진입하면 video가 재생 되어야 한다.", () => {
    render(<VideoSection />);

    const video = screen.getByRole("presentation") as HTMLMediaElement;

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[0][0]([
        { isIntersecting: true },
      ]);
    });

    expect(video.play).toHaveBeenCalled();
  });

  test("VideoSection에 진입하고 다음 화면으로 진입하면 텍스트가 서서히 표시되어야 한다.", () => {
    render(<VideoSection />);

    const text = screen.getByRole("banner");

    expect(text).toHaveClass("opacity-0");

    act(() => {
      (IntersectionObserver as jest.Mock).mock.calls[1][0]([
        { isIntersecting: true },
      ]);
    });

    expect(text).toHaveClass("opacity-100");
  });
});

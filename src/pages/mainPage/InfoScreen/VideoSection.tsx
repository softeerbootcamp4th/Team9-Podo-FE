import React, { useEffect, useRef, useState } from "react";
import Video from "../../../assets/video/CarInfoVideo.mp4";

const VideoSection = () => {
  const [isShown, setIsShown] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) videoRef.current?.play();
          else videoRef.current?.pause();
        });
      },
      { threshold: 1 },
    );

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsShown(true);
          else setIsShown(false);
        });
      },
      { threshold: 1 },
    );

    if (videoRef.current) videoObserver.observe(videoRef.current);
    if (textRef.current) textObserver.observe(textRef.current);

    return () => {
      if (videoRef.current) videoObserver.unobserve(videoRef.current);
      if (textRef.current) textObserver.unobserve(textRef.current);
    };
  });

  return (
    <div className="relative h-[200vh] w-screen bg-black">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        className="sticky top-0 z-0 h-screen w-screen snap-start"
      >
        <source src={Video} />
      </video>
      <div
        ref={textRef}
        className={`absolute top-[100vh] z-10 h-screen w-screen snap-start flex-col gap-500 bg-black/50 flex-center ${isShown ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
      >
        <div className="font-kia-signature-bold text-8xl text-gray-100">
          The 2025 Seltos
        </div>
        <div className="font-kia-signature text-title-3 text-gray-100">
          하이엔드 감성의 도심형 대표 SUV
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

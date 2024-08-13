import React, { useEffect, useRef } from "react";
import Video from "../../../assets/video/CarInfoVideo.mp4";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) videoRef.current?.play();
          else videoRef.current?.pause();
        });
      },
      { threshold: 1 },
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  });

  return (
    <div className="h-screen w-screen snap-start bg-black">
      <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        className="h-full w-full"
      >
        <source src={Video} />
      </video>
    </div>
  );
};

export default VideoSection;

import React from "react";

const Timer = () => {
  return (
    <div className="relative h-[13rem] w-[54rem] flex-center">
      <div className="relative h-full w-full overflow-hidden rounded-full">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
            WebkitBackgroundClip: "border-box",
            backgroundClip: "border-box",
            padding: "1px",
          }}
        >
          <div className="relative h-full w-full rounded-full bg-gray-950 flex-center">
            {/* 타이머 텍스트 */}
            <span
              className="text-[8rem]"
              style={{
                backgroundImage:
                  "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              00:00:00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

import React from "react";

const Timer = () => {
  return (
    <div className="relative h-[13rem] w-[54rem] flex-center">
      <div className="before:gradient-mask relative h-full w-full flex-center before:-inset-[0] before:content-none">
        <p
          style={{
            backgroundImage:
              "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          className="font-kia-signature-bold text-[8rem]"
        >
          00:00:00
        </p>
      </div>
    </div>
  );
};

export default Timer;

import React, { MouseEventHandler } from "react";
import Button from "../../../common/Button/Button";

interface EventSelectOptionsProps {
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: Function;
  title: string;
  description: string;
  img: string;
  buttonInfo: {
    onClick: MouseEventHandler<HTMLButtonElement>;
    size: "big" | "small" | "long";
    isEnabled: boolean;
  };
}

const EventSelectOptions = ({
  index,
  hoveredIndex,
  setHoveredIndex,
  title,
  description,
  img,
  buttonInfo: { size, onClick, isEnabled },
}: EventSelectOptionsProps) => {
  const onMouseEnterHandler = () => {
    setHoveredIndex(index);
  };
  const onMouseLeaveHandler = () => {
    setHoveredIndex(null);
  };
  return (
    <div
      className={`flex h-full w-1/2 flex-col items-center pb-10 pt-44 font-kia-signature-bold text-title-3 text-gray-50 transition-all duration-200 ${hoveredIndex !== null && hoveredIndex !== index && "opacity-30"}`}
    >
      <div
        className="flex flex-col items-center justify-around"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className="flex-col gap-6 flex-center">
          <div
            className={`rounded-full bg-opacity-10 px-6 py-4 transition-all duration-200 flex-center ${hoveredIndex === index ? "bg-white bg-opacity-100" : "bg-white/10"}`}
          >
            <span
              style={{
                background:
                  "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {title}
            </span>
          </div>
          <div className="whitespace-pre-wrap text-center">{description}</div>
        </div>
        <img src={img} alt="" className="h-[28rem] w-fit" />
        <Button
          onClick={onClick}
          size={size}
          isEnabled={isEnabled}
          defaultText="참여하기"
          disabledText="참여완료"
        />
      </div>
    </div>
  );
};

export default EventSelectOptions;

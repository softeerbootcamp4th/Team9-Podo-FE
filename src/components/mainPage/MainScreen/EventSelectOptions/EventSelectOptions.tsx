import React, { MouseEvent, MouseEventHandler } from "react";
import Button from "../../../common/Button/Button";

interface EventSelectOptionsProps {
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
  title,
  description,
  img,
  buttonInfo: { size, onClick, isEnabled },
}: EventSelectOptionsProps) => {
  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-around pb-10 pt-44 font-kia-signature-bold text-title-3 text-gray-50">
      <div className="flex-col gap-6 flex-center">
        <div className="rounded-full bg-black bg-opacity-10 px-6 py-4 flex-center">
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
      <img src={img} alt="" className="h-[28rem]" />
      <Button
        onClick={onClick}
        size={size}
        isEnabled={isEnabled}
        defaultText="참여하기"
        disabledText="참여완료"
      />
    </div>
  );
};

export default EventSelectOptions;

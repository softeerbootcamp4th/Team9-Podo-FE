import React from "react";
import Button from "../../../common/Button/Button";
import { EventSelectOptionsProps } from "../../../../types/InfoScreen";
import { GRADIENT_TEXT_STYLE } from "../../../../styles/tailwind";

const EventSelectOptions = ({
  index,
  hoveredIndex,
  setHoveredIndex,
  title,
  description,
  img,
  buttonInfo: { size, onClick, isEnabled },
}: EventSelectOptionsProps) => {
  const isHovered = hoveredIndex === index;
  const isDimmed = hoveredIndex !== null && !isHovered;

  const handleMouseEnter = () => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <div
      role="option"
      className={`flex h-full w-1/2 flex-col items-center pb-10 pt-44 font-kia-signature-bold text-title-3 text-gray-50 transition-all duration-200 ${
        isDimmed && "opacity-30"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center justify-around">
        <div className="flex-col gap-6 flex-center">
          <div
            className={`rounded-full bg-opacity-10 px-6 py-4 transition-all duration-200 flex-center ${
              isHovered ? "bg-white bg-opacity-100" : "bg-white/10"
            }`}
          >
            <span style={GRADIENT_TEXT_STYLE}>{title}</span>
          </div>
          <div className="whitespace-pre-wrap text-center">{description}</div>
        </div>
        <img src={img} alt="상품" className="h-[28rem] w-fit" />
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

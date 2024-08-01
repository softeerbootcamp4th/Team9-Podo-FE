import React, { MouseEventHandler } from "react";
import Button from "../../common/Button/Button";

interface EventFooterProps {
  eventInfo: {
    title: string;
    description: string;
    option: Object;
  };
  buttonInfo: {
    size: "small" | "big" | "long";
    onClick: MouseEventHandler<HTMLButtonElement>;
    isEnabled: boolean;
  };
}

const EventFooter = ({
  eventInfo,
  buttonInfo: { size, onClick, isEnabled },
}: EventFooterProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        size={size}
        isEnabled={true}
        defaultText="참여하기"
      />
    </>
  );
};

export default EventFooter;

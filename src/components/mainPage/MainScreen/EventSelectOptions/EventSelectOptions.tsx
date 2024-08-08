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
  return <></>;
};

export default EventSelectOptions;

import React, { MouseEvent, MouseEventHandler } from "react";
import Button from "../../components/common/Button/Button";

interface EventSelectOptionsProps {
  title: string;
  description: string;
  img: string;
  buttonInfo: {
    onClick: MouseEventHandler<HTMLButtonElement>;
    size: "big" | "small" | "long";
  };
}

const EventSelectOptions = ({
  title,
  description,
  img,
  buttonInfo: { onClick, size },
}: EventSelectOptionsProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
      <img src={img} alt="" />
      <Button onClick={onClick} size={size} isEnabled={true} defaultText="" />
    </>
  );
};

export default EventSelectOptions;

import React from "react";

interface OutsideDescriptionItemProps {
  title: string;
  description: string;
  img: string;
}

const OutsideDescriptionItem = ({
  title,
  description,
  img,
}: OutsideDescriptionItemProps) => {
  return (
    <>
      <img>{img}</img>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default OutsideDescriptionItem;

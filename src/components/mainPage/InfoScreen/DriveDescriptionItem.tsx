import React from "react";

interface DriveDescriptionItemProps {
  title: string;
  description: string;
  img: string;
}

const DriveDescriptionItem = ({
  title,
  description,
  img,
}: DriveDescriptionItemProps) => {
  return (
    <>
      <img />
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default DriveDescriptionItem;

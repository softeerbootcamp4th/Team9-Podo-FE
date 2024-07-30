import React from "react";

interface ConvenienceDescriptionItemProps {
  title: string;
  description: string;
  img: string;
}

const ConvenienceDescriptionItem = ({
  title,
  description,
  img,
}: ConvenienceDescriptionItemProps) => {
  return (
    <>
      <img />
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default ConvenienceDescriptionItem;

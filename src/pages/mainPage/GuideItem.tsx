import React from "react";

interface GuideItemProps {
  title: string;
  description: string;
}

const GuideItem = ({ title, description }: GuideItemProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default GuideItem;

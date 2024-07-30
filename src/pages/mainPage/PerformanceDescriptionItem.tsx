import React from "react";

interface PerformanceDescriptionItemProps {
  title: string;
  info: Array<object>;
  footer: string;
}

const PerformanceDescriptionItem = ({
  title,
  info,
  footer,
}: PerformanceDescriptionItemProps) => {
  return (
    <>
      <div>{title}</div>
      <div></div>
      <div>{footer}</div>
    </>
  );
};

export default PerformanceDescriptionItem;

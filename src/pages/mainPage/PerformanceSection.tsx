import React from "react";
import PerformanceDescriptionItem from "./PerformanceDescriptionItem";

const PerformanceSection = () => {
  return (
    <>
      <div>Header</div>
      <img>car</img>
      <PerformanceDescriptionItem title="dd" info={[{}, {}]} footer="dd" />
    </>
  );
};

export default PerformanceSection;

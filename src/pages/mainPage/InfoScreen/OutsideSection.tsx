import React from "react";
import OutsideDescriptionItem from "../../../components/mainPage/InfoScreen/OutsideDescriptionItem";
import OutsideInfo from "../../../assets/images/OutsideInfo.png";

const OutsideSection = () => {
  return (
    <div className="h-screen w-screen snap-start">
      <div className="h-[2.75rem] w-[4.375rem] rounded-[6.25rem] font-kia-signature text-title-4 flex-center gradient-border">
        외장
      </div>
      <img src={OutsideInfo} alt="OutsideImage" />
      <OutsideDescriptionItem title="dd" description="dd" img="ss" />
      <OutsideDescriptionItem title="dd" description="dd" img="ss" />
      <OutsideDescriptionItem title="dd" description="dd" img="ss" />
    </div>
  );
};

export default OutsideSection;

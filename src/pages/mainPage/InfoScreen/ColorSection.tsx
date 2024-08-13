import React, { useEffect, useRef, useState } from "react";
import white from "../../../assets/images/colorSnowWhitePearl.png";
import blue from "../../../assets/images/colorDarkOceanBlue.png";
import green from "../../../assets/images/colorGrean.png";
import gray from "../../../assets/images/colorGravityGray.png";
import black from "../../../assets/images/colorFusionBlack.png";

const ColorSection = () => {
  return (
    <div className="relative flex snap-start flex-col items-center bg-white">
      <img src={white} alt="" />

      <img src={blue} alt="" />

      <img src={green} alt="" />

      <img src={gray} alt="" />

      <img src={black} alt="" />
    </div>
  );
};

export default ColorSection;

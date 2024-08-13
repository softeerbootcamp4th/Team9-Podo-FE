import React, { useEffect, useRef, useState } from "react";
import white from "../../../assets/images/colorWhite.png";
import blue from "../../../assets/images/colorBlue.png";
import green from "../../../assets/images/colorGreen.png";
import gray from "../../../assets/images/colorGray.png";
import black from "../../../assets/images/colorBlack.png";

const ColorSection = () => {
  return (
    <div className="flex snap-start flex-col items-center bg-white">
      <div
        className="h-screen w-screen"
        style={{
          background:
            "linear-gradient(180deg, #F1F1F1 0%, #969696 73%, #D9D9D9 100%)",
        }}
      >
        <img src={white} alt="" />
      </div>

      <div
        className="h-screen w-screen"
        style={{
          background:
            "linear-gradient(180deg, #3B5984 0%, #0D1F39 73%, #2A4265 100%)",
        }}
      >
        <img src={blue} alt="" />
      </div>

      <div
        className="h-screen w-screen"
        style={{
          background:
            "linear-gradient(180deg, #4B7C83 0%, #1E4247 72.5%, #29626A 100%)",
        }}
      >
        <img src={green} alt="" />
      </div>

      <div
        className="h-screen w-screen"
        style={{
          background:
            "linear-gradient(180deg, #41505E 0%, #0D1A28 71.5%, #323B44 100%)",
        }}
      >
        <img src={gray} alt="" />
      </div>

      <div
        className="h-screen w-screen"
        style={{
          background:
            "linear-gradient(180deg, #515151 0%, #252525 73%, #4A4A4A 100%)",
        }}
      >
        <img src={black} alt="" />
      </div>
    </div>
  );
};

export default ColorSection;

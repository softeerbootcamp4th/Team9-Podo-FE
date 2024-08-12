import React from "react";
import Glow from "../Glow/Glow";

const GlowBackground = () => {
  return (
    <div className="absolute -z-20 h-screen w-screen overflow-hidden bg-black">
      <div className="-z-10">
        <Glow />
      </div>
    </div>
  );
};

export default GlowBackground;

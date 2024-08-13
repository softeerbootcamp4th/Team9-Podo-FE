import React, { useEffect, useRef, useState } from "react";
import white from "../../../assets/images/colorSnowWhitePearl.png";
import blue from "../../../assets/images/colorDarkOceanBlue.png";
import green from "../../../assets/images/colorGrean.png";
import gray from "../../../assets/images/colorGravityGray.png";
import black from "../../../assets/images/colorFusionBlack.png";

const colorInfo = [
  { color: white },
  { color: blue },
  { color: green },
  { color: gray },
  { color: black },
  { color: black },
];

const zIndex = {
  0: "z-[60]",
  1: "z-50",
  2: "z-40",
  3: "z-30",
  4: "z-20",
  5: "z-10",
};

const ColorSection = () => {
  const [clipPosition, setClipPosition] = useState(
    Array.from({ length: colorInfo.length }, () => 0),
  );
  const requestAnimationRef = useRef(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    requestAnimationRef.current = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(requestAnimationRef.current);
    };
  }, []);

  const render = () => {
    if (divRef.current) {
      const imageHeight = divRef.current.offsetHeight / colorInfo.length;
      const scrollPosition = -divRef.current.getBoundingClientRect().y;
      const newClipPosition = colorInfo.map((_, index) => {
        const imageOffset = (index + 1) * imageHeight;
        if (
          imageOffset < scrollPosition &&
          scrollPosition < imageOffset + imageHeight
        ) {
          return ((scrollPosition - imageOffset) / imageHeight) * 100;
        } else if (imageOffset < scrollPosition) {
          return 100;
        } else {
          return 0;
        }
      });

      setClipPosition(newClipPosition);
    }

    requestAnimationFrame(render);
  };

  return (
    <div
      ref={divRef}
      className="relative flex h-[600vh] snap-start flex-col items-center bg-white"
    >
      {colorInfo.map(({ color }, index) => {
        if (index === 1) {
          return (
            <div
              className={`sticky top-0 h-screen snap-start ${zIndex[index as keyof typeof zIndex]}`}
              style={{
                clipPath: `inset(0 0 ${clipPosition[index]}% 0)`,
              }}
            >
              <img src={color} alt={color} className="h-full" />
            </div>
          );
        } else {
          return (
            <div
              className={`sticky top-0 h-screen ${zIndex[index as keyof typeof zIndex]}`}
              style={{
                clipPath: `inset(0 0 ${clipPosition[index]}% 0)`,
              }}
            >
              <img src={color} alt={color} className="h-full" />
            </div>
          );
        }
      })}

      {/* {colorInfo.map(({ color }, index) => {
        if (index === 0) {
          return (
            <div
              ref={(el) => (divRefs.current[index] = el)}
              className="absolute top-0 h-screen"
              style={{
                clipPath: `inset(0 0 ${-clipPosition}% 0)`,
              }}
            >
              <img src={color} alt={color} className="h-full" />
            </div>
          );
        } else {
          return (
            <div
              ref={(el) => (divRefs.current[index] = el)}
              className="h-screen"
              style={{
                clipPath: `inset(0 0 ${-clipPosition}% 0)`,
              }}
            ></div>
          );
        }
      })} */}
    </div>
  );
};

export default ColorSection;

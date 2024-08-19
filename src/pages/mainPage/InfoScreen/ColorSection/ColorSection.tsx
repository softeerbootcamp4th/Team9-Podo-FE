import React, {
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { colorInfoData } from "../../../../constants/InfoData";

const zIndex = {
  0: "z-[60]",
  1: "z-50",
  2: "z-40",
  3: "z-30",
  4: "z-20",
  5: "z-10",
};

interface ColorPalleteProps {
  index: number;
  parentRef: RefObject<HTMLDivElement>;
}

const ColorPallete = ({ index, parentRef }: ColorPalleteProps) => {
  const handleClick = (
    event: MouseEvent<HTMLDivElement>,
    parentRef: RefObject<HTMLDivElement>,
    index: number,
  ) => {
    if (parentRef.current) {
      const containerOffset = parentRef.current.offsetTop;
      const imageHeight = parentRef.current.offsetHeight / colorInfoData.length;
      const imageOffset = (index + 1) * imageHeight;
      parentRef.current.parentElement?.parentElement?.scrollTo({
        top: imageOffset + containerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative left-1/2 top-[75%] z-[70] flex h-fit w-fit -translate-x-1/2 flex-col items-center gap-700">
      <nav
        role="navigation"
        className="flex items-center gap-2.5 rounded-[6.25rem] bg-white/20 p-3"
      >
        {colorInfoData.map(({ rgb, key }, i) => {
          if (i === 5) return null;
          return (
            <div
              role="button"
              onClick={(e) => handleClick(e, parentRef, i)}
              key={key}
              className={`${rgb} ${index === i ? "h-800 w-800" : "h-500 w-500"} cursor-pointer rounded-[50%]`}
            ></div>
          );
        })}
      </nav>
      <div className="flex flex-col items-center">
        <p className="mb-2 font-kia-signature-bold text-4xl text-black/70">
          {colorInfoData[index].koTitle}
        </p>
        <p className="font-kia-signature text-xl text-black/20">
          {colorInfoData[index].engTitle}
        </p>
      </div>
    </div>
  );
};

const ColorSection = () => {
  const [clipPosition, setClipPosition] = useState(
    Array.from({ length: colorInfoData.length }, () => 0),
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
      const imageHeight = divRef.current.offsetHeight / colorInfoData.length;
      const scrollPosition = -divRef.current.getBoundingClientRect().y;
      const newClipPosition = colorInfoData.map((_, index) => {
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
      className="flex w-screen snap-start flex-col items-center bg-white"
    >
      {colorInfoData.map(({ color, key }, index) => {
        return (
          <div
            key={key}
            className={`sticky top-0 h-screen w-screen ${zIndex[index as keyof typeof zIndex]} bg-cover bg-center`}
            style={{
              clipPath: `inset(0 0 ${clipPosition[index]}% 0)`,
              backgroundImage: `url(${color})`,
            }}
          >
            <ColorPallete index={index} parentRef={divRef} />
          </div>
        );
      })}
    </div>
  );
};

export default ColorSection;

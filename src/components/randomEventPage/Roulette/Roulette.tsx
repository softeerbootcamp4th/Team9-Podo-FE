import React from "react";

interface RouletteInterface {
  textList: Array<string>;
  targetText: string;
}

const Roulette = ({ textList, targetText }: RouletteInterface) => {
  return (
    <div
      className="flex items-center justify-center rounded-full p-[1px] font-kia-signature-bold text-title-4 text-gray-50"
      style={{
        background:
          "linear-gradient(93.7deg, #505861 0%, #4B7C83 33.5%, #1B3F72 66.5%, #F2F2F2 100%)",
      }}
    >
      <div className="h-full w-full rounded-full bg-gray-950 px-10 py-6 flex-center">
        <p
          style={{
            textShadow:
              "0px 0px 10px #FFF, 0px 0px 20px #FFF, 0px 0px 30px #FFF",
          }}
        >
          {targetText}
        </p>
      </div>
    </div>
  );
};

export default Roulette;

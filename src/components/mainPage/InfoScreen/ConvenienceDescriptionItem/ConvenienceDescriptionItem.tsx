import React from "react";

interface ConvenienceDescriptionItemProps {
  title: string;
  description: string;
  img: string;
  tailwind?: string;
}

const ConvenienceDescriptionItem = ({
  title,
  description,
  img,
  tailwind,
}: ConvenienceDescriptionItemProps) => {
  return (
    <div
      role="article"
      className={`flex h-[38.25rem] w-[46rem] shrink-0 flex-col ${tailwind}`}
    >
      <img src={img} className="w-full" />
      <div className="mb-500 mt-800 font-kia-signature-bold text-title-3 text-gray-950">
        {title}
      </div>
      <div className="font-kia-signature text-body-1-regular text-gray-400">
        {description}
      </div>
    </div>
  );
};

export default ConvenienceDescriptionItem;

import React from "react";

interface DriveDescriptionItemProps {
  title: string;
  description: string;
  img: string;
  tailwind?: string;
  isSelected?: boolean;
  noneSelected?: boolean;
}

const DriveDescriptionItem = ({
  title,
  description,
  img,
  tailwind,
  isSelected,
  noneSelected,
}: DriveDescriptionItemProps) => {
  return (
    <div
      role="article"
      className={`flex h-[20.875rem] w-[30rem] flex-col gap-700 flex-center ${tailwind}`}
    >
      <div
        role="figure"
        className={`flex h-full w-full justify-center break-keep bg-cover bg-center px-8 pt-8 font-kia-signature text-body-1-regular text-gray-50 ${noneSelected ? "text-opacity-0" : isSelected ? "text-opacity-100" : "text-opacity-0"}`}
        style={{
          backgroundImage: `${noneSelected ? `url(${img})` : isSelected ? `linear-gradient(180deg,  rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(${img})` : `linear-gradient(180deg,  rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.8) 100%, rgba(0, 0, 0, 0.00) 100%), url(${img})`}`,
        }}
      >
        {description}
      </div>
      <div className="font-kia-signature-bold text-title-4 text-gray-950">
        {title}
      </div>
    </div>
  );
};

export default DriveDescriptionItem;

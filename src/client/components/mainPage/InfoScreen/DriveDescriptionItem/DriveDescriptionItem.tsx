import React from "react";

interface DriveDescriptionItemProps {
  title: string;
  description: string;
  img: string;
  tailwind?: string;
  isSelected?: boolean;
}

const DriveDescriptionItem = React.memo(
  ({
    title,
    description,
    img,
    tailwind,
    isSelected,
  }: DriveDescriptionItemProps) => {
    return (
      <div
        role="article"
        className={`flex h-[20.875rem] w-[30rem] flex-col gap-700 flex-center ${tailwind}`}
      >
        <div
          role="figure"
          className={`flex h-full w-full justify-center break-keep bg-cover bg-center px-8 pt-8 font-kia-signature text-body-1-regular text-gray-50 ${isSelected ? "text-opacity-100" : "text-opacity-0"} transition-all duration-200`}
          style={{
            backgroundImage: `${isSelected ? `linear-gradient(180deg,  rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%), url(${img})` : `url(${img})`}`,
          }}
        >
          {description}
        </div>
        <div className="font-kia-signature-bold text-title-4 text-gray-950">
          {title}
        </div>
      </div>
    );
  },
);

export default DriveDescriptionItem;

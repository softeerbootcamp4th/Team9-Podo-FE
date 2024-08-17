import React from "react";

interface DriveDescriptionItemProps {
  title: string;
  img: string;
  tailwind?: string;
}

const DriveDescriptionItem = ({
  title,
  img,
  tailwind,
}: DriveDescriptionItemProps) => {
  return (
    <div
      className={`flex h-[20.875rem] w-[30rem] flex-col gap-700 flex-center ${tailwind}`}
    >
      <img src={img} alt={title} />
      <div className="font-kia-signature-bold text-title-4 text-gray-950">
        {title}
      </div>
    </div>
  );
};

export default DriveDescriptionItem;

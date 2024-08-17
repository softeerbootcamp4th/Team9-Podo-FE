import React from "react";

interface OutsideDescriptionItemProps {
  title: string;
  description: string;
  img: string;
}

const OutsideDescriptionItem = ({
  title,
  description,
  img,
}: OutsideDescriptionItemProps) => {
  return (
    <div>
      <img className="h-[39.125rem] w-[95rem]" src={img} />
      <div className="py-700">
        <div className="mb-500 font-kia-signature-bold text-title-3 text-gray-950">
          {title}
        </div>
        <div className="font-kia-signature text-body-1-regular text-gray-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default OutsideDescriptionItem;

import React from "react";

interface EventHeaderProps {
  title: string;
  description: string;
}

const EventHeader = ({ title, description }: EventHeaderProps) => {
  return (
    <div className="gap-5 text-gray-50 flex-center">
      <div className="text-glow-lightly whitespace-nowrap font-kia-signature-bold text-[6rem]">
        {title}
      </div>
      <div className="whitespace-pre font-kia-signature-light text-title-1">
        {description}
      </div>
    </div>
  );
};

export default EventHeader;

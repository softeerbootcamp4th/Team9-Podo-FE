import React from "react";

interface EventHeaderProps {
  title: string;
  description: string;
}

const EventHeader = ({ title, description }: EventHeaderProps) => {
  return (
    <>
      <div>{title}</div>
      <div>{description}</div>
    </>
  );
};

export default EventHeader;

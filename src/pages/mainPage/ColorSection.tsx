import React from "react";

interface CarImgProps {
  img: string;
}

interface PalleteItemProps {
  color: string;
  active: boolean;
}

interface NameItemProps {
  name: string;
  egName: string;
}

const CarImg = ({ img }: CarImgProps) => {
  return <img>{img}</img>;
};

const PalleteItem = ({ color, active }: PalleteItemProps) => {
  return (
    <>
      <div>{color}</div>
    </>
  );
};

const NameItem = ({ name, egName }: NameItemProps) => {
  return (
    <>
      <div>{name}</div>
      <div>{egName}</div>
    </>
  );
};

const ColorSection = () => {
  return (
    <>
      <div>
        <CarImg img="img" />
      </div>
      <div>
        <PalleteItem color="red" active={false} />
      </div>
      <div>
        <NameItem name="ss" egName="sss" />
      </div>
    </>
  );
};

export default ColorSection;

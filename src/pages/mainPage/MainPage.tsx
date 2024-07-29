import React from "react";
import Button from "../../components/Button";

const MainPage = () => {
  return (
    <div className="flex-center h-screen w-screen">
      <Button
        size="small"
        isEnabled={true}
        onClick={() => {}}
        defaultText="참여하기"
        disabledText="참여불가"
      ></Button>
    </div>
  );
};

export default MainPage;

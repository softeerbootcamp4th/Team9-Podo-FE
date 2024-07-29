import React from "react";
import Button from "../../components/Button";

const MainPage = () => {
  return (
    <div className="h-screen w-screen flex-center">
      <Button
        size="long"
        isEnabled={true}
        onClick={() => {}}
        defaultText="참여하기"
        disabledText="참여불가"
      ></Button>
    </div>
  );
};

export default MainPage;

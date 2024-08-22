import React from "react";
import { FallbackProps } from "react-error-boundary";
import GlowBackground from "../../components/common/GlowBackground/GlowBackground";
import HomeButton from "../../components/common/HomeButton/HomeButton";
import Button from "../../components/common/Button/Button";

const FallbackPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <GlowBackground />
      <HomeButton />
      <div className="flex h-full w-full flex-col gap-20 flex-center">
        <h2 className="font-kia-signature-bold text-5xl text-gray-50">
          요청에 오류가 발생했습니다.
        </h2>
        <Button
          size="small"
          onClick={resetErrorBoundary}
          isEnabled
          disabledText=""
          defaultText="다시 시도"
        />
      </div>
    </div>
  );
};

export default FallbackPage;

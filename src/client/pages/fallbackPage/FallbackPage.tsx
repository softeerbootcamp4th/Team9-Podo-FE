import React from "react";
import { FallbackProps } from "react-error-boundary";

const FallbackPage = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <h2>잘못된 접근 방식</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>다시 시도</button>
    </div>
  );
};

export default FallbackPage;

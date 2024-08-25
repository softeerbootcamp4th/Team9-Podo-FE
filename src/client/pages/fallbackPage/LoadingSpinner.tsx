import React from "react";

const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "black", // 배경색 추가
    }}
  >
    <div
      className="spinner"
      style={{
        width: "64px",
        height: "64px",
        border: "8px solid #505861", // 얇은 외곽선과 반투명 색상
        borderTop: "8px solid #1B3F72", // 메인 스피너 색상
        borderRadius: "50%",
        animation: "spin 1s ease-in-out infinite", // 부드러운 애니메이션
      }}
    />
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default LoadingSpinner;

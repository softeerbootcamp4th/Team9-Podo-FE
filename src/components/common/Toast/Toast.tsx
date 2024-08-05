import React from "react";

const Toast = ({ content }) => {
  return (
    <div className="absolute bottom-4 left-1/2 h-fit w-fit -translate-x-1/2 rounded-3xl bg-tertiary px-6 py-3 font-kia-signature-bold text-body-1-bold text-gray-50">
      {content}
    </div>
  );
};

export default Toast;

import React from "react";

const RandomExpectations = () => {
  return (
    <div className="relative w-[94rem]">
      <hr className="h-[1px] bg-gray-400" />
      <p className="mb-8 mt-[4.5rem] font-kia-signature-bold text-title-2 text-gray-50">
        기대평 작성 시, 당첨 확률 up!
      </p>
      <div className="h-[16.875rem] gap-5 rounded-[2.5rem] bg-gray-950 flex-center">
        <textarea
          placeholder="최소 20자 이상 입력하세요."
          className="ml-8 h-[12.25rem] w-[77.25rem] resize-none bg-gray-950"
        ></textarea>
        <button className="h-[15.375rem] w-[12.25rem] rounded-[1.75rem] bg-primary text-gray-950 flex-center">
          참여하기
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 h-fit w-fit -translate-x-1/2 rounded-3xl bg-tertiary px-6 py-3 font-kia-signature-bold text-body-1-bold text-gray-50">
        error toast
      </div>
    </div>
  );
};

export default RandomExpectations;

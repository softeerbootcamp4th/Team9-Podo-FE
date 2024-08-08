import React, { ChangeEvent, useState } from "react";

/**
 * 입력 Custom Hook
 * @template T - Form의 type
 * @param initialForm - 초기 설정 데이터
 * @returns
 * @example
 * const InputComponent = () => {
 *   const { form, onChange, reset } = useInputs({
 *     name: "",
 *     phontNumber: "",
 *   });
 *
 *   return (
 *     <div>
 *       <input name="name" placeholder="이름" onChange={onChange} value={name} />
 *     </div>
 *   );
 * }; */
const useInputs = <T extends Object>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const reset = () => {
    setForm(initialForm);
  };

  return { form, onChange, reset };
};

export default useInputs;

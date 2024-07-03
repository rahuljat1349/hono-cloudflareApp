import { ChangeEvent } from "react";

interface InputType {
  label: string;
  placeholder: string;
  type?: string;
  id?: string;
  name: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({
  label,
  placeholder,
  onchange,
  type,
  id,
  name,
}: InputType) => {
  return (
    <>
      <label className="font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="border-[1px] focus:border-gray-700 border-solid rounded-md p-2 bg-gray-50 outline-none duration-200"
        type={type || "text"}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onchange}
      />
    </>
  );
};

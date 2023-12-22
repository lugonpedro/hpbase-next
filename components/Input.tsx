import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput(props: SearchInputProps) {
  return (
    <input
      className="bg-[#fff] w-full p-2 rounded-xl placeholder:text-[#000] text-[#000]"
      placeholder="Pesquisar"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

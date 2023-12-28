interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  label: string;
  active?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="w-full rounded-[8px] bg-[#4040ff] p-2 duration-300 xl:w-max xl:px-6 xl:py-3.5 disabled:bg-[#4040ff]/50"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <p>{props.label}</p>
    </button>
  );
}

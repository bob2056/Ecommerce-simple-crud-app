import type { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode,
  disabled?: boolean
}
export const CancelButton = ({children="Cancel", disabled=false}: Readonly<IButtonProps>) => {
  return (
    <button
      disabled={disabled}
      className="disabled:cursor-not-allowed disabled:bg-red-800/50 hover:cursor-pointer hover:underline hover:scale-103 transition duration-500 w-full text-lg text-white flex gap-3 p-2 rounded items-center justify-center bg-red-800"
      type="reset"
    >
      {children}
    </button>
  );
}

export const SubmitButton = ({children="Submit", disabled=false}: Readonly<IButtonProps>) => {
  return (
    <button
      disabled={disabled}
      className="disabled:cursor-not-allowed disabled:bg-emerald-800/50 hover:cursor-pointer hover:underline hover:scale-103 transition duration-500 w-full text-lg text-white flex gap-3 p-2 rounded items-center justify-center bg-emerald-800"
      type="submit"
    >
      {children}
    </button>
  );
}
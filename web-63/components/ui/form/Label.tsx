import type { ReactNode } from "react";

interface IFormLabelProps{
  htmlFor?: string, 
  className?: string,
  label?: ReactNode,
  children?: ReactNode
}
export const FormLabel = ({htmlFor, label, children, className='w-1/3'}:IFormLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} text-lg font-semibold`}
    >
      {children ?? label}
    </label>
  );
}

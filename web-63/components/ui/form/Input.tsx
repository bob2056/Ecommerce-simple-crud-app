import type { BaseSyntheticEvent, HTMLInputTypeAttribute } from "react";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";

export interface IFormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  type?: HTMLInputTypeAttribute;
  errmsg?: string;
}

export interface ISingleSelectOptionType{
  label: string, 
  value: string
}

export interface ISelectFormProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  errmsg?: string;
  options: Array<ISingleSelectOptionType>;
}

export interface ITextInputProps<T extends FieldValues>{
  control: Control<T>, 
  name: Path<T>, 
  errmsg?: string
}

export interface IFileInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  multiple?: boolean
  errmsg?: string;
}


export const FormInput = <T extends FieldValues>({control, name, type, errmsg}: Readonly<IFormInputProps<T>>) => {
  return (
    <>
      <Controller control={control} name={name} render={({ field }) => {
          return (
            <>
              <input
                type={type}
                {...field}
                className=" w-full border border-gray-300 bg-white p-2 rounded shadow"
              />
              <span className="text-red-800 text-sm italic">
                {errmsg}
              </span>
            </>
          );
        }}
      />
    </>
  );
}

export const FileInput = <T extends FieldValues>({control,name,errmsg,multiple=false}: Readonly<IFileInputProps<T>>) => {
  // const [files, setFiles] = useState()
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <>
              <input
                type={'file'}
                multiple={multiple}
                onChange={(e: BaseSyntheticEvent) => {
                  // {"0": {}, "1": {}, "2": {}}
                  const files: Array<File> = Object.values(e.target.files);     // object of objects
                  if(multiple) {
                    field.onChange(files)
                  } else {
                    field.onChange(files[0])
                  }

                }}
                className="w-full border border-gray-300 bg-white p-2 rounded shadow"
              />
              <span className="text-red-800 text-sm italic">{errmsg}</span>
            </>
          );
        }}
      />
    </>
  );
};


export const FormTextInput = <T extends FieldValues>({control, name, errmsg}: Readonly<ITextInputProps<T>>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <>
            <textarea
              {...field}
              rows={5}
              className="w-full border border-gray-300 bg-white p-2 rounded shadow resize-none"
            ></textarea>
            <span className="text-red-800 test-sm italic">{errmsg}</span>
          </>
        );
      }}
    />
  );
}

export const SelectForm = <T extends FieldValues>({control, name, errmsg, options}: Readonly<ISelectFormProps<T>>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <>
              <select
                {...field}
                className="w-full border border-gray-300 bg-white p-2 rounded shadow"
              >
                  <option value="">-- Select Any One --</option>
                  {
                    options && options.map((val:ISingleSelectOptionType, inx: number) => {
                      return <option value={val.value} key={inx}>
                        {val.label}
                      </option>
                    })
                  }
              </select>
              <span className="text-red-800 text-sm italic">{errmsg}</span>
            </>
          );
        }}
      />
    </>
  );
};

// Dropdown 
  // Select-option

  // <select>
  //   <option value=""></option>
  // </select>
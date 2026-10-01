'use client';
import { FormLabel } from "@/components/ui/form/Label";
import { FileInput, FormInput, FormTextInput, SelectForm } from "../ui/form/Input";
import { useForm, type Resolver } from "react-hook-form";
import { CancelButton, SubmitButton } from "../ui/button/FormButtons";
import { type BrandType, IBrandDetail, BrandDTO, BrandCreateDTO} from "@/lib/types/Brand";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

interface IBrandFormProps{
  formSubmitEvent:(data: BrandType)=>void, 
  catDetail?: IBrandDetail | null,
  dto: typeof BrandDTO | typeof BrandCreateDTO
}

export const BrandForm = ({ formSubmitEvent, catDetail=null , dto}: Readonly<IBrandFormProps>) => {
  const {control, handleSubmit, formState: { errors, isSubmitting }, reset} = useForm<BrandType>({
    defaultValues: {
      name: "",
      status: "inactive",
      summary: ""
    },
    resolver: zodResolver(dto) as Resolver<BrandType>,
  });
  
  useEffect(() => {
    if(catDetail) {
      reset({
        name: catDetail.name,
        status: catDetail.status, 
        summary: catDetail.summary
      })
    }
  }, [catDetail])

  return (
    <form
      onSubmit={handleSubmit(formSubmitEvent)}
      className="w-full flex flex-col gap-5"
    >
      <div className="flex flex-col md:flex-row w-full">
        <FormLabel className="w-1/3" htmlFor="name">
          Name:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <FormInput
            name="name"
            control={control}
            errmsg={errors.name?.message as string}
          />
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <FormLabel className="w-1/3" htmlFor="summary">
          Summary:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <FormTextInput
            name="summary"
            control={control}
            errmsg={errors.summary?.message as string}
          />
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <FormLabel className="w-1/3" htmlFor="status">
          Status:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <SelectForm
            name="status"
            control={control}
            options={[
              { label: "Published", value: "active" },
              { label: "Un-Published", value: "inactive" },
            ]}
            errmsg={errors?.status?.message as string}
          />
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <FormLabel className="w-1/3" htmlFor="Image">
          Image:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <FileInput
            name="image"
            control={control}
            errmsg={errors?.image?.message as string}
          />
        </div>
      </div>
      <div className="flex w-full gap-5">
        <CancelButton disabled={isSubmitting}>Cancel</CancelButton>
        <SubmitButton disabled={isSubmitting}>Submit</SubmitButton>
      </div>
    </form>
  );
};
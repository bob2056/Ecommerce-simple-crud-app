'use client';
import { FormLabel } from "@/components/ui/form/Label";
import { FileInput, FormInput, SelectForm } from "../ui/form/Input";
import { useForm } from "react-hook-form";
import { CancelButton, SubmitButton } from "../ui/button/FormButtons";
import { type BannerType, BannerCreateDTO } from "@/lib/types/Banner";
import { zodResolver } from "@hookform/resolvers/zod";

export const BannerForm = ({ formSubmitEvent }: Readonly<{formSubmitEvent:(data: BannerType)=>void}>) => {
  const {control,handleSubmit,formState: { errors, isSubmitting },} = useForm({
    // defaultValues: {},
    resolver: zodResolver(BannerCreateDTO)
  });

  return (
    <form
      onSubmit={handleSubmit(formSubmitEvent)}
      className="w-full flex flex-col gap-5"
    >
      <div className="flex flex-col md:flex-row w-full">
        <FormLabel className="w-1/3" htmlFor="title">
          Title:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <FormInput
            name="title"
            control={control}
            errmsg={errors.title?.message as string}
          />
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row">
        <FormLabel className="w-1/3" htmlFor="url">
          Url:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <FormInput
            type="url"
            name="url"
            control={control}
            errmsg={errors.url?.message as string}
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
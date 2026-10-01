'use client';
import { FormLabel } from "@/components/ui/form/Label";
import { FileInput, FormInput, FormTextInput, ISingleSelectOptionType, SelectForm } from "../ui/form/Input";
import { useForm, type Resolver } from "react-hook-form";
import { CancelButton, SubmitButton } from "../ui/button/FormButtons";
import { type CategoryType, ICategoryDetail, CategoryDTO, CategoryCreateDTO} from "@/lib/types/Category";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/services/axiosclient";

interface ICategoryFormProps{
  formSubmitEvent:(data: CategoryType)=>void, 
  catDetail?: ICategoryDetail | null,
  dto: typeof CategoryDTO | typeof CategoryCreateDTO
}

export const CategoryForm = ({ formSubmitEvent, catDetail=null , dto}: Readonly<ICategoryFormProps>) => {
  const {control, handleSubmit, formState: { errors, isSubmitting }, reset} = useForm<CategoryType>({
    defaultValues: {
      name: "",
      parentId: '',
      status: "inactive",
      summary: ""
    },
    resolver: zodResolver(dto) as Resolver<CategoryType>,
  });
  const [parentCats, setParentCats] = useState<Array<ISingleSelectOptionType>>([])

  const getParentCats = async () => {
    try {
      const response = await axiosInstance.get("/category", {
        params: {
          onlyParent: 1, 
          limit: 100,
          status: 'active'
        }
      }) as {data: Array<ICategoryDetail>}
      let singleCat: Array<ISingleSelectOptionType>=[];
      response.data.map((cat: ICategoryDetail) => {
        singleCat.push({
          label: cat.name, 
          value: cat._id
        })
      })
      setParentCats(singleCat)
    } catch {

    }
  }
  useEffect(() => {
    getParentCats()
  },[])

  useEffect(() => {
    if(catDetail) {
      reset({
        name: catDetail.name,
        parentId: catDetail?.parentId?._id,
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
        <FormLabel className="w-1/3" htmlFor="parentId">
          Sub-cat of:{" "}
        </FormLabel>
        <div className="w-full md:w-2/3">
          <SelectForm
            name="parentId"
            control={control}
            options={parentCats}
            errmsg={errors?.parentId?.message as string}
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
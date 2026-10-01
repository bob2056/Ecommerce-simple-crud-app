'use client';

import {CategoryCreateDTO, type CategoryType } from "@/lib/types/Category";
import { CategoryForm } from "./CategoryForm";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { useRouter } from "next/navigation";

export default function CategoryCreateComponent() {
  const router = useRouter()

  const submitCategory = async (data: CategoryType) => {
    try {
      await axiosInstance.post("/category", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Category created successfully")
      router.push("/cms/categories")
    } catch(exception) {
      toast.error("Error while creating Category")
    }
  };
  return (
    <>
      <CategoryForm dto={CategoryCreateDTO} formSubmitEvent={submitCategory} />
    </>
  );
}
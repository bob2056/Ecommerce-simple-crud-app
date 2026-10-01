'use client';

import { CategoryDTO, CategoryType, ICategoryDetail } from "@/lib/types/Category";
import { CategoryForm } from "./CategoryForm";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/services/axiosclient";
import { toast } from "sonner";
// import { toast } from "sonner";

export default function CategoryEditComponent() {
  const params = useParams()
  const [detail, setDetail] = useState<ICategoryDetail>()
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  const getCategoryDetail = async() => {
    try {
      const response = await axiosInstance.get('/category/'+params.slug) as {data: ICategoryDetail}
      setDetail(response.data)
    } catch(exception) {
      window.location.href = "/cms/categories"
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategoryDetail()
  }, [params.slug])



  const submitCategory = async (data: CategoryType) => {
    try {
      await axiosInstance.put('/category/'+params.slug, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Category Updated successfully!!!")
    } catch {
      toast.error("Category could not be updated at this moment")
    } finally {
      router.push("/cms/categories")
    }
  };


  return loading ? (
    <>Loading...</>
  ) : (
    <CategoryForm dto={CategoryDTO} formSubmitEvent={submitCategory} catDetail={detail} />
  );
}
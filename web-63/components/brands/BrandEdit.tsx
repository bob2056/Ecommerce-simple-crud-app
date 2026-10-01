'use client';

import { BrandDTO, BrandType, IBrandDetail } from "@/lib/types/Brand";
import { BrandForm } from "./BrandForm";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/services/axiosclient";
import { toast } from "sonner";
// import { toast } from "sonner";

export default function BrandEditComponent() {
  const params = useParams()
  const [detail, setDetail] = useState<IBrandDetail>()
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()

  const getBrandDetail = async() => {
    try {
      const response = await axiosInstance.get('/brand/'+params.slug) as {data: IBrandDetail}
      setDetail(response.data)
    } catch(exception) {
      window.location.href = "/cms/brands"
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getBrandDetail()
  }, [params.slug])



  const submitBrand = async (data: BrandType) => {
    try {
      await axiosInstance.put('/brand/'+params.slug, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Brand Updated successfully!!!")
    } catch {
      toast.error("Brand could not be updated at this moment")
    } finally {
      router.push("/cms/brands")
    }
  };


  return loading ? (
    <>Loading...</>
  ) : (
    <BrandForm dto={BrandDTO} formSubmitEvent={submitBrand} catDetail={detail} />
  );
}
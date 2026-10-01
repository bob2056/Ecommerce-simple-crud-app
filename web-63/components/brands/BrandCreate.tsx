'use client';

import {BrandCreateDTO, type BrandType } from "@/lib/types/Brand";
import { BrandForm } from "./BrandForm";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { useRouter } from "next/navigation";

export default function BrandCreateComponent() {
  const router = useRouter()

  const submitBrand = async (data: BrandType) => {
    try {
      await axiosInstance.post("/brand", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Brand created successfully")
      router.push("/cms/brands")
    } catch(exception) {
      toast.error("Error while creating Brand")
    }
  };
  return (
    <>
      <BrandForm dto={BrandCreateDTO} formSubmitEvent={submitBrand} />
    </>
  );
}
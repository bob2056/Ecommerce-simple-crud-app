'use client';

import {type BannerType } from "@/lib/types/Banner";
import { BannerForm } from "./BannerForm";

export default function BannerCreateComponent() {
  const submitBanner = (data: BannerType) => {
    console.log(data);
  };
  return (
    <>
      <BannerForm formSubmitEvent={submitBanner} />
    </>
  );
}
import { BannerType } from "@/lib/types/Banner";
import { BannerForm } from "./BannerForm";

export default function BannerEditComponent() {
  const submitBanner = (data: BannerType) => {
    console.log(data);
  };
  return (
    <>
      <BannerForm formSubmitEvent={submitBanner} />
    </>
  );
}
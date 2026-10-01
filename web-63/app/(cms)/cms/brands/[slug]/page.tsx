import BrandEditComponent from "@/components/brands/BrandEdit";
import { getBrandBySlug } from "@/lib/services/BrandService";
import { IBrandDetail } from "@/lib/types/Brand";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const paramsData = await params;
  const response = (await getBrandBySlug(paramsData.slug)) as {
    data: IBrandDetail;
  };

  return {
    title: "Update Brand || " + response.data.name,
    description: response.data.summary,
    openGraph: {
      title: "Update Brand || " + response.data.name,
      description: response.data.summary,
    },
  };
};

export default function EditBrand() {

  return (
    <div className="bg-gray-50 w-full flex flex-col gap-5 p-5 my-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl lg:4xl font-semibold text-teal-950">
          Brand Update Page
        </h1>
      </div>

      <div className="w-full flex flex-col">
        <BrandEditComponent />
      </div>
    </div>
  );
}

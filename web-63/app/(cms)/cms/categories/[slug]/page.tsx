import CategoryEditComponent from "@/components/category/CategoryEdit";
import { getCategoryBySlug } from "@/lib/services/CategoryService";
import { ICategoryDetail } from "@/lib/types/Category";
import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const paramsData = await params;
  const response = (await getCategoryBySlug(paramsData.slug)) as {
    data: ICategoryDetail;
  };

  return {
    title: "Update Category || " + response.data.name,
    description: response.data.summary,
    openGraph: {
      title: "Update Category || " + response.data.name,
      description: response.data.summary,
    },
  };
};

export default function EditCategory() {

  return (
    <div className="bg-gray-50 w-full flex flex-col gap-5 p-5 my-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl lg:4xl font-semibold text-teal-950">
          Category Update Page
        </h1>
      </div>

      <div className="w-full flex flex-col">
        <CategoryEditComponent />
      </div>
    </div>
  );
}

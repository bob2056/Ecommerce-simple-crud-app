import SubCategoryListTable from "@/components/category/SubCategoryList";
import { getCategoryBySlug } from "@/lib/services/CategoryService";
import { ICategoryDetail } from "@/lib/types/Category";
import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({params}: {params: Promise<{slug: string}>}): Promise<Metadata> => {
  const paramsData = await params
  const response = await getCategoryBySlug(paramsData.slug) as {data: ICategoryDetail}

  return {
    title: "Category Detail of || " + response.data.name,
    description: response.data.summary,
    openGraph: {
      title: "Category Detail of || " + response.data.name,
      description: response.data.summary,
    },
  };
}

export default async function SubCatListOfCat(props: Readonly<{params: Promise<{slug: string}>}>) {
  const params = await props.params
  const response = (await getCategoryBySlug(params.slug)) as {
    data: ICategoryDetail;
  };


  return (
    <>
      <div className="bg-gray-50 w-full flex flex-col gap-5 p-5 my-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-teal-950">
            Sub - Category Listing Page of <em className="text-teal-800">"{response.data.name}"</em>
          </h1>
          <Link href={'/cms/categories'}>
            Go back to Listing 
          </Link>
        </div>
        <SubCategoryListTable parentId={response.data._id} />
      </div>
    </>
  );
}
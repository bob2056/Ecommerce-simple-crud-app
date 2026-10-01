import CategoryList from "@/components/category/CategoryList";
import Link from "next/link";
export default function CategoryListPage() {
  // 
  return (
    <>
      <div className="bg-gray-50 w-full flex flex-col gap-5 p-5 my-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-teal-950">
            Category Listing Page
          </h1>
          <Link
            href="/cms/categories/create"
            className="p-2 w-50 rounded-full text-center bg-teal-800 text-white hover:underline hover:bg-teal-900 hover:scale-102 transition duration-300"
          >
            Create Category
          </Link>
        </div>
        <CategoryList />
      </div>
    </>
  );
}
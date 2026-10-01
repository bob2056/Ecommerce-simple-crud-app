import CategoryCreateComponent from "@/components/category/CategoryCreate"

export default function CategoryCreate() {
  return <>
    <div className="bg-gray-50 w-full flex flex-col gap-5 p-5 my-10">
      <div className="w-full flex justify-between items-center">
        
        <h1 className="text-3xl lg:4xl font-semibold text-teal-950">
          Category Create Page
        </h1>

      </div>

      <div className="w-full flex flex-col">
        <CategoryCreateComponent />
      </div>
    </div>
  </>
}
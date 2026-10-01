'use client';

import { ICategoryDetail } from "@/lib/types/Category";
import Image from "next/image";
import Link from "next/link";

import {Icon} from "@iconify/react"
import RowDelete from "../ui/table/RowDelete";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { usePathname, useRouter } from "next/navigation";

interface ICategoryTableBodyProps {
  categories: Array<ICategoryDetail>;
  showView?: boolean
}

export const CategoryTableBody = ({ categories, showView= true }: Readonly<ICategoryTableBodyProps>) => {
  const router = useRouter()
  const pathname = usePathname()

  const deleteCategory = async (slug: string) => {
    try {
      await axiosInstance.delete("/category/"+slug)
      toast.success("Category Deleted successfully.")
      // reload 
      // router.push(pathname)
      window.location.reload()
    } catch {
      toast.error("Sorry! Cannot delete the category at this moment.")
    }
  }
  return (
    categories.map((cat: ICategoryDetail, ind: number) => {
      return (
        <tr key={ind}>
          <td className="p-3 border border-gray-800">{cat.name}</td>
          <td className="p-3 border border-gray-800">{cat.summary}</td>
          <td className="p-3 border border-gray-800">
            {cat.image ? (
              <Image
                crossOrigin="anonymous"
                src={cat?.image?.url}
                width={40}
                height={40}
                className="size-10 rounded-full"
                alt={cat.name}
              />
            ) : (
              <></>
            )}
          </td>
          <td className="p-3 border border-gray-800">
            {cat.status === "active" ? "Published" : "Un-Published"}
          </td>
          <td className="p-3 border border-gray-800">
            <div className="flex w-full gap-3">
              {showView ? (
                <Link
                  href={`/cms/categories/${cat.slug}/view`}
                  className="size-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition hover:scale-98 duration-300"
                >
                  <Icon
                    icon={"fa6-regular:eye"}
                    className="text-white size-4"
                  />
                </Link>
              ) : (
                <></>
              )}

              <Link
                href={"/cms/categories/"+cat.slug}
                className="size-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-800 transition hover:scale-98 duration-300"
              >
                <Icon icon={"lucide:pen"} className="text-white size-3" />
              </Link>

              <RowDelete deleteHandler={deleteCategory} slug={cat.slug} />
            </div>
          </td>
        </tr>
      );
    })
  )
};
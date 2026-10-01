'use client';

import { IBrandDetail } from "@/lib/types/Brand";
import Image from "next/image";
import Link from "next/link";

import {Icon} from "@iconify/react"
import RowDelete from "../ui/table/RowDelete";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { usePathname, useRouter } from "next/navigation";

interface IBrandTableBodyProps {
  brands: Array<IBrandDetail>;
  showView?: boolean
}

export const BrandTableBody = ({ brands, showView= true }: Readonly<IBrandTableBodyProps>) => {
  const router = useRouter()
  const pathname = usePathname()

  const deleteBrand = async (slug: string) => {
    try {
      await axiosInstance.delete("/brand/"+slug)
      toast.success("Brand Deleted successfully.")
      // reload 
      // router.push(pathname)
      window.location.reload()
    } catch {
      toast.error("Sorry! Cannot delete the brand at this moment.")
    }
  }
  return (
    brands.map((brand: IBrandDetail, ind: number) => {
      return (
        <tr key={ind}>
          <td className="p-3 border border-gray-800">{brand.name}</td>
          <td className="p-3 border border-gray-800">{brand.summary}</td>
          <td className="p-3 border border-gray-800">
            {brand.image ? (
              <Image
                crossOrigin="anonymous"
                src={brand?.image?.url}
                width={40}
                height={40}
                className="size-10 rounded-full"
                alt={brand.name}
              />
            ) : (
              <></>
            )}
          </td>
          <td className="p-3 border border-gray-800">
            {brand.status === "active" ? "Published" : "Un-Published"}
          </td>
          <td className="p-3 border border-gray-800">
            <div className="flex w-full gap-3">
              <Link
                href={"/cms/brands/"+brand.slug}
                className="size-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-800 transition hover:scale-98 duration-300"
              >
                <Icon icon={"lucide:pen"} className="text-white size-3" />
              </Link>

              <RowDelete deleteHandler={deleteBrand} slug={brand.slug} />
            </div>
          </td>
        </tr>
      );
    })
  )
};
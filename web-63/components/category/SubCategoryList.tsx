'use client'
import { TableRowSkeleton } from "../ui/table/RowSkeleton";
import { ICategoryDetail } from "@/lib/types/Category";
import { useEffect, useState } from "react";
import { CategoryTableBody } from "./CategoryTableBody";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { IPagination } from "@/lib/types/Global";
import TableSearchForm from "../ui/table/TableSearchForm";

export default function SubCategoryListTable({parentId}: Readonly<{parentId: string}>) {
  const [categories, setCategories] = useState<Array<ICategoryDetail>>([])
  const [loading, setLoading] = useState<boolean>(true)

  
  const getAllCategories = async (search="") => {
    try {
      const response = (await axiosInstance.get("/category", {
        params: {
          onlyChild: 1,
          catId: parentId,
          search: search
        },
      })) as {
        data: Array<ICategoryDetail>;
        meta: { pagination: IPagination };
      };
      setCategories(response.data)
    } catch {
      toast.error("Error fetching category List")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    return () => {
      getAllCategories()
    }
  }, [])

  return (
    <>
      <div className="w-full flex justify-end">
        <TableSearchForm loadData={getAllCategories} />
      </div>

      <div className="w-full flex">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Name
              </th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Summary
              </th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Image
              </th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Status
              </th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableRowSkeleton rows={5} cols={5} />
            ) : categories && categories.length ? (
              <CategoryTableBody categories={categories} showView={false} />
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="p-2 text-center border bordre-gray-800"
                >
                  No Data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
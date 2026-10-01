'use client';
import TableSearchForm from "@/components/ui/table/TableSearchForm"
import {TableRowSkeleton} from "@/components/ui/table/RowSkeleton";

import { useEffect, useState } from "react";
import { IUserDetail } from "@/lib/types/Auth";
import { UserTableBody } from "./UserTableBody";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { IPagination } from "@/lib/types/Global";

export default function UserListTable() {
  const [loading, setLoading] = useState<boolean>(true)
  const [users, setUsers] = useState<Array<IUserDetail>>([])

  const getAllUsers = async(search: string = '', page: number = 1, limit: number = 20) => {
    try {
      const response = await axiosInstance.get("/user", {
        params: {
          page: page, 
          limit: limit, 
          search: search
        }
      }) as {data: Array<IUserDetail>, meta: {pagination: IPagination}}
      setUsers(response.data)
    } catch {
      toast.error("Error while fetching data...")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <>
      <div className="w-full flex justify-end">
        <TableSearchForm loadData={getAllUsers} />
      </div>

      <div className="w-full flex">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Name
              </th>

              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Email
              </th>
              <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                Role
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
              <TableRowSkeleton rows={5} cols={6} />
            ) : users && users.length ? (
              <UserTableBody users={users} showView={true} />
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
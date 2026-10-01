'use client';

import {type IUserDetail} from "@/lib/types/Auth"
import Image from "next/image";
import Link from "next/link";

import {Icon} from "@iconify/react"
import RowDelete from "../ui/table/RowDelete";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { usePathname, useRouter } from "next/navigation";

interface IUserTableBodyProps {
  users: Array<IUserDetail>;
  showView?: boolean
}

export const UserTableBody = ({ users, showView= true }: Readonly<IUserTableBodyProps>) => {
  const router = useRouter()
  const pathname = usePathname()

  const deleteUser = async (slug: string) => {
    try {
      await axiosInstance.delete("/user/"+slug)
      toast.success("User Deleted successfully.")
      // reload 
      // router.push(pathname)
      window.location.reload()
    } catch {
      toast.error("Sorry! Cannot delete the user at this moment.")
    }
  }
  return (
    users.map((user: IUserDetail, ind: number) => {
      return (
        <tr key={ind}>
          <td className="p-3 border border-gray-800">
            <div className="flex gap-3 items-center">
              <Image crossOrigin="anonymous" src={user?.image?.url as string} width={40} height={40} className="size-10 rounded-full" alt={user.name} />
              {user.name}
            </div>
          </td>
          <td className="p-3 border border-gray-800">{user.email}</td>
          <td className="p-3 border border-gray-800">
            {user.role}
          </td>
          <td className="p-3 border border-gray-800">
            {user.status === "active" ? "Published" : "Un-Published"}
          </td>
          <td className="p-3 border border-gray-800">
            <div className="flex w-full gap-3">
              {showView ? (
                <Link
                  href={`/cms/users/${user._id}/view`}
                  className="size-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-800 transition hover:scale-98 duration-300"
                >
                  <Icon
                    icon={"fa6-regular:message"}
                    className="text-white size-4"
                  />
                </Link>
              ) : (
                <></>
              )}

              <Link
                href={"/cms/users/" + user._id}
                className="size-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-800 transition hover:scale-98 duration-300"
              >
                <Icon icon={"lucide:pen"} className="text-white size-3" />
              </Link>

              <RowDelete
                deleteHandler={deleteUser}
                slug={user._id as string}
              />
            </div>
          </td>
        </tr>
      );
    })
  )
};
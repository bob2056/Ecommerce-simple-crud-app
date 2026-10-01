import { TableRowSkeleton } from "@/components/ui/table/RowSkeleton";
import Link from "next/link";

export default function BannerListPage() {
  return (
    <>
      <div className="bg-gray-50 w-full flex flex-col gap-5 p-5 my-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-teal-950">
            Banner Listing Page
          </h1>
          <Link
            href="/cms/banner/create"
            className="p-2 w-50 rounded-full text-center bg-teal-800 text-white hover:underline hover:bg-teal-900 hover:scale-102 transition duration-300"
          >
            Create Banner
          </Link>
        </div>
        <div className="w-full flex justify-end">
          <form className="w-1/3">
            <input
              type="search"
              className="px-5 p-2 rounded-full bg-white w-full shadow-lg"
              placeholder="Enter your search keyword"
            />
          </form>
        </div>

        <div className="w-full flex">
          <table className="w-full">
            <thead>
              <tr>
                <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                  Title
                </th>
                <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                  Image
                </th>
                <th className="bg-gray-950 text-white text-center p-3 border border-gray-800">
                  URL
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
              <TableRowSkeleton rows={5} cols={5} />
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}
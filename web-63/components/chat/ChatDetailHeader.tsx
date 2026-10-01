import { IUserDetail } from "@/lib/types/Auth";
import { nameImage } from "@/lib/utilities/helpers";
import Image from "next/image";

export default function ChatDetailHeader({user}: Readonly<{user: IUserDetail}>) {
  return (
    <>
      <div className="mb-4 flex items-center border-b pb-3">
        <div className=" rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl mr-3">
          {user.image ? (
            <>
              <Image
                src={user?.image?.url as string}
                crossOrigin="anonymous"
                width={40}
                height={40}
                className="size-10 rounded-full"
                alt="User Image"
              />
            </>
          ) : (
            <div className="size-10 bg-gray-300 shadow-lg flex items-center justify-center rounded-full">
              <h4 className="bg-linear-to-br from-blue-900 via-pink-700 to-purple-500 inline-block text-transparent bg-clip-text font-semibold">
                {nameImage(user?.name as string)}
              </h4>
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold text-lg">{user?.name}</div>
          <div className="text-xs text-gray-400">{user?.email}</div>
        </div>
      </div>
    </>
  );
}
'use client'

import { IUserDetail } from "@/lib/types/Auth";
import { useEffect, useState } from "react";
import ChatDetailHeader from "./ChatDetailHeader";
import SendMessageForm from "./SendMessageForm";
import ChatMessages from "./ChatMessages";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import axiosInstance from "@/lib/services/axiosclient";
import { socket } from "@/lib/config/socket";

export default function ChatDetail() {
  const [userDetail, setUserDetail] = useState<IUserDetail>()
  const [loading, setLoading] = useState<boolean>(true)
  
  const params = useParams()
  const router = useRouter()

  const getUserDetail = async () => {
    try {
      const response = await axiosInstance.get("/user/"+params.userId) as {data: IUserDetail}
      setUserDetail(response.data)
    } catch {
      toast.error("User cannot be fetched")
      router.push("/cms/users")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getUserDetail()
  }, [params.userId])


  useEffect(() => {
    socket.connect()      // connection event trigger
  }, [])





  return loading ? (
    <>Loading...</>
  ) : (
    <>
      {/* Chat Header */}
      <ChatDetailHeader user={userDetail as IUserDetail} />
      {/* Chat History */}

      <ChatMessages user={userDetail as IUserDetail} />

      {/* Input Box */}
      <SendMessageForm user={userDetail as IUserDetail} />
    </>
  );
}
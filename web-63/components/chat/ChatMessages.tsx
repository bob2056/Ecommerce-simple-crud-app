'use client';
import axiosInstance from "@/lib/services/axiosclient";
import { IUserDetail } from "@/lib/types/Auth";
import { IImage } from "@/lib/types/Global";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {DateTime} from "luxon"
import Image from "next/image"
import {nameImage} from "@/lib/utilities/helpers"
import { socket } from "@/lib/config/socket";
import { useAuth } from "@/lib/hook/useAuth";
export interface ISingleMessage {
  createdAt: Date,
  deletedStatus: string,
  file: Array<IImage>,
  id: string,
  message: string
  messageId: string,
  reactions?: Array<string> | null,
  receiver: string
  sender: string
  status: string
  updatedAt: Date
}

export default function ChatMessages({user}: Readonly<{user: IUserDetail}>) {
  const [messages, setMessages] = useState<Array<ISingleMessage>>([])
  const {loggedInUser} = useAuth();
  const getMessages = async(page=1) => {
    try {
      const response = await axiosInstance.get("/chat/"+user._id, {
        params: {
          page: 1, limit: 100
        }
      }) as {data: Array<ISingleMessage>};
      setMessages(response.data.reverse())

    } catch(exception) {
      toast.error("Error while fetching chat messagess...")
    }
  }
  
  useEffect(() => {
    getMessages()
    const handleSocketMessage = (data: {sender: string, receiver: string}) => {
      if((data.sender === loggedInUser?._id && data.receiver === user._id)
        || 
      (data.receiver === loggedInUser?._id && data.sender === user._id)) {
        getMessages()
      }
    }
    socket.on("NEW_MESSAGE_ACK", handleSocketMessage);
    return () => {
      socket.off("NEW_MESSAGE_ACK", handleSocketMessage);
    }
  }, [])

  return (
    <div
      className="flex-1 overflow-y-auto mb-4 px-4 py-2 space-y-2 bg-gray-100"
      id="chat-messages"
    >
      {/* Example chat history, should be mapped from messages */}
      <div className="flex flex-col space-y-2 mt-4">
        {messages && messages.length > 0 ? (
          messages.map((msg: ISingleMessage, ind: number) =>
            msg.receiver === user._id ? (
              <div
                className="flex items-end justify-end"
                key={`received-${ind}`}
              >
                <div>
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 shadow max-w-xl ml-auto">
                    {msg.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 mr-1 text-right">
                    {DateTime.fromJSDate(new Date(msg.createdAt)).toRelative()}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-end" key={`send-${ind}`}>
                <div className="shrink-0 size-10 rounded-full bg-gray-400 text-white flex items-center justify-center mr-3 font-bold">
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
                    
                      <h4 className="bg-linear-to-br from-blue-500 via-pink-500 to-purple-800 inline-block text-transparent bg-clip-text font-semibold">
                        {nameImage(user?.name as string)}
                      </h4>
                    
                  )}
                </div>
                <div>
                  <div className="bg-white rounded-lg px-4 py-2 shadow text-gray-900 max-w-xl">
                    {msg.message}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 ml-1">
                    {DateTime.fromJSDate(new Date(msg.createdAt)).toRelative()}
                  </div>
                </div>
              </div>
            ),
          )
        ) : (
          <p className="text-sm text-gray-400 text-center mt-10">
            Say hello to start the conversation.
          </p>
        )}
      </div>
    </div>
  );
}
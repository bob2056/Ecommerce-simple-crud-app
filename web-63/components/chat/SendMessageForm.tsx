'use client';
import { socket } from "@/lib/config/socket";
import { useAuth } from "@/lib/hook/useAuth";
import axiosInstance from "@/lib/services/axiosclient";
import { IUserDetail } from "@/lib/types/Auth";
import { BaseSyntheticEvent, useState } from "react";

export default function SendMessageForm({user}: Readonly<{user: IUserDetail}>) {
  const [message, setMessage] = useState("")
  const {loggedInUser} = useAuth()


  const submitChat = async (e: BaseSyntheticEvent) => {
    try {
      e.preventDefault()
      const data = {
        receiver: user._id,
        message: message,
        // file upload 
        // file: Array<File>
      }
      setMessage("");
      await axiosInstance.post('/chat', data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      // socket event trigger/fire
      socket.emit("NEW_MESSAGE", {sender: loggedInUser?._id, receiver: user._id})
    } catch(exception) {
      //
    }
  }
  return (
    <form onSubmit={submitChat} className="flex gap-2">
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
        placeholder="Type your message..."
        className="flex-1 border border-gray-300 bg-white shadow-2xl rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Send
      </button>
    </form>
  );
}
'use client'
import { useAuth } from "@/lib/hook/useAuth";
import axiosInstance from "@/lib/services/axiosclient";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import MarkdownMessage from "./MarkdownMessage";

export default function ChatbotDetail() {
  const {loggedInUser} = useAuth()
  const router = useRouter()
  const [chat, setChat] = useState<string>("")

  const [messages, setMessages] = useState<Array<{sender: string, message: string, chatTime: Date}>>([])


  useEffect(() => {
    if(!loggedInUser) {
      router.push("/login")
    }
  }, [])

  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const handleSendMessage = async (e: BaseSyntheticEvent) => {
    try {
      e.preventDefault()
      setMessages((prev) => [
        ...prev,
        { sender: "You", message: chat, chatTime: new Date() },
      ])
      setChat("")

      const response = await axiosInstance.post('/chat/with-gemini', {question: chat})
      setMessages((prev) => [
        ...prev,
        { sender: "AI", message: response.data, chatTime: new Date() },
      ])
    } catch (exception) {
      //
    }
  }

  return (<>
  <div className="max-w-7xl my-10 border border-gray-100 mx-auto bg-gray-100 rounded-lg shadow-md p-6 flex flex-col h-150">
    {/* Chat Header */}
    <div className="mb-4 flex items-center border-b pb-3">
      <div className="bg-linear-to-br from-blue-400 to-purple-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-xl mr-3">
        🤖
      </div>
      <div>
        <div className="font-semibold text-lg">AI Chatbot</div>
        <div className="text-xs text-gray-400">Online</div>
      </div>
    </div>
    {/* Chat History */}
    
    <div className="flex-1 overflow-y-auto mb-4 space-y-4" id="chat-messages">
      {messages.length === 0 && (
        <p className="text-sm text-gray-400 text-center mt-10">
          Say hello to start the conversation.
        </p>
      )}
      {messages.map((msg, index) => {
        const isUser = msg.sender === "You"
        return (
          <div
            key={index}
            className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
          >
            <div
              className={
                isUser
                  ? "max-w-[75%] bg-blue-100 text-gray-800 px-4 py-2 rounded-lg rounded-br-none"
                  : "max-w-[85%] bg-gray-200 text-gray-900 px-4 py-2 rounded-lg rounded-bl-none"
              }
            >
              {isUser ? msg.message : <MarkdownMessage content={msg.message} />}
            </div>
            <span className="text-xs text-gray-500 mt-1">
              {msg.sender} · {formatTime(msg.chatTime)}
            </span>
          </div>
        )
      })}
    </div>

    {/* Input Box */}
    <form onSubmit={handleSendMessage} className="flex gap-2">
      <input
        type="text"
        value={chat}
        onChange={(e) => {
          setChat(e.target.value)
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
  </div>
  </>)
}
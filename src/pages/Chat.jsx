import React, { useState } from "react";
import Navbar from "./Navbar";

const ChatMessage = ({ isSent, sender, time, message, imageUrl }) => {
  const flexDirection = isSent ? "row" : "row-reverse";
  const bgColor = isSent ? "bg-gray-500" : "bg-blue-400";
  const textColor = isSent ? "text-white" : "text-white dark:text-white";
  const imgPos = isSent ? "end" : "start";

  return (
    <div className={`flex items-${imgPos} gap-2.5 flex-${flexDirection}`}>
      <div
        className={`flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 ${bgColor} rounded-${
          isSent ? "s" : "e"
        }-xl rounded-${isSent ? "se" : "es"}-xl dark:bg-gray-700`}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          {isSent && (
            <span className={`text-sm font-semibold ${textColor}`}>
              {sender}
            </span>
          )}
          <span className={`text-sm font-normal ${textColor}`}>{time}</span>
        </div>
        <p className={`text-sm font-normal py-2.5 ${textColor}`}>{message}</p>
      </div>
      {!isSent && (
        <img className="w-8 h-8 rounded-full" src={imageUrl} alt="R" />
      )}
    </div>
  );
};

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (inputMessage.trim() !== "") {
      try {
        // Sending user message
        const sentMessage = {
          isSent: true,
          sender: "You", // Update sender to "You"
          time: new Date().toLocaleTimeString(),
          message: inputMessage,
          imageUrl: "",
        };
        setMessages((prevMessages) => [...prevMessages, sentMessage]);

        const response = await fetch(
          "https://moodchatbotapi.onrender.com/ask",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              input: inputMessage,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to send message");
        }

        const responseData = await response.json();

        // Construct the message from the response
        const responseMessage = {
          isSent: false,
          sender: responseData.sender, // Assuming sender is included in the response data
          time: new Date().toLocaleTimeString(),
          message: responseData.text,
          imageUrl:
            "https://scontent.fbom5-1.fna.fbcdn.net/v/t1.6435-9/125512014_187927989469711_3412240680594336888_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MW1guOfvg4EAX-gp_Gy&_nc_ht=scontent.fbom5-1.fna&oh=00_AfBgfwWqtSi4CljBnFfG5xkbBHX67CUEkefkL-sd5XUJTg&oe=6630D2C2", // Assuming imageUrl is included in the response data
        };

        setMessages((prevMessages) => [...prevMessages, responseMessage]);
        setInputMessage("");
      } catch (error) {
        console.error("Error sending message:", error.message);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col pb-[70px] h-screen">
        <div className="flex-1 container overflow-auto">
          <div className="flex flex-col gap-5">
            {messages.length === 0 ? (
              <div className="text-center">
                <p>No messages yet</p>
              </div>
            ) : (
              messages.map((msg, index) => <ChatMessage key={index} {...msg} />)
            )}
          </div>
        </div>
        <div className="flex p-4">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full border p-2 outline-none"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-3" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Chat;

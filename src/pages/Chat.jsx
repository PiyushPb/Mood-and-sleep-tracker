import React, { useState } from "react";

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
          <span className={`text-sm font-semibold ${textColor}`}>{sender}</span>
          <span className={`text-sm font-normal ${textColor}`}>{time}</span>
        </div>
        <p className={`text-sm font-normal py-2.5 ${textColor}`}>{message}</p>
      </div>
      <img className="w-8 h-8 rounded-full" src={imageUrl} alt="R" />
    </div>
  );
};

const Chat = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      // Simulate sending a message
      const sentMessage = {
        isSent: true,
        sender: "Your Name",
        time: new Date().toLocaleTimeString(),
        message: inputMessage,
        imageUrl: "https://your-sender-image-url.jpg",
      };

      // Simulate receiving a response
      const responseMessage = {
        isSent: false,
        sender: "AI Bot",
        time: new Date().toLocaleTimeString(),
        message: `Received: ${inputMessage}`,
        imageUrl:
          "https://img.freepik.com/free-vector/cute-robot-wearing-hat-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5186.jpg?w=740&t=st=1706545212~exp=1706545812~hmac=d95a4daefa7a6f7eaf965b35f220042482a64de35f7e0015551e8225718d1957",
      };

      // Update the state with the sent and received messages
      setMessages((prevMessages) => [
        ...prevMessages,
        sentMessage,
        responseMessage,
      ]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex flex-col pb-[70px] h-screen">
      <div className="flex-1 container overflow-auto">
        <div className="flex flex-col gap-3">
          {messages.map((msg, index) => (
            <ChatMessage key={index} {...msg} />
          ))}
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
  );
};

export default Chat;

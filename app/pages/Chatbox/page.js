"use client";

import React, { useState } from "react";
import { AiFillMessage } from "react-icons/ai"; // Open chat icon
import { IoClose } from "react-icons/io5"; // Close chat icon

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Initially set to false to keep the chatbox closed

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessages = [
        ...messages,
        { sender: "user", text: userInput },
      ];

      // Get bot response based on user input
      const botResponse = getBotResponse(userInput);

      setMessages(newMessages);
      setIsTyping(true);

      // Simulate bot typing and response delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: botResponse },
        ]);
        setIsTyping(false);
      }, 1000);

      setUserInput("");
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    if (message.includes("hello") || message.includes("hi")) {
      return "Hi there! How can I assist you today?";
    }
    if (message.includes("how are you")) {
      return "I'm doing great, thank you for asking!";
    }
    if (message.includes("what is your name")) {
      return "I am a chatbot created to help you!";
    }
    if (message.includes("weather")) {
      return "I’m sorry, I can't provide live weather updates right now.";
    }
    if (message.includes("bye") || message.includes("goodbye")) {
      return "Goodbye! Have a great day!";
    }
    if (message.includes("help")) {
      return "I'm here to assist you with any questions. How can I help you?";
    }

    return `You asked: "${userMessage}". Unfortunately, I don't have an answer for that yet, but I am constantly learning!`;
  };

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleChatbox} className="toggle-button">
        {isOpen ? <IoClose size={24} /> : <AiFillMessage size={24} />}
      </button>

      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <AiFillMessage size={24} /> Chat with us
          </div>
          <div className="chatbox-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
              >
                <p>{message.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="bot-typing">
                <p>Typing...</p>
              </div>
            )}
          </div>
          <div className="chatbox-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;

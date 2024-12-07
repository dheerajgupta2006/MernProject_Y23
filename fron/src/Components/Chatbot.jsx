import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";

const client = new HfInference("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");

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = async (userInput) => {
    try {
      setIsTyping(true);
      const chatCompletion = await client.chatCompletion({
        model: "Qwen/Qwen2.5-Coder-32B-Instruct",
        messages: [{ role: "user", content: userInput }],
        max_tokens: 500,
      });

      return chatCompletion.choices[0].message.content.split(/[\n•-]+/).filter((point) => point.trim());
    } catch (error) {
      console.error("Error fetching response:", error);
      return ["Sorry, I couldn't fetch a response."];
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { user: true, text: input };
      setMessages([...messages, userMessage]);
      setInput("");

      const botResponses = await getResponse(input);
      const botMessage = { user: false, points: botResponses };

      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div className="container py-4">
      {/* Chat Area */}
      <div className="border rounded p-3 mb-3" style={{ height: "70vh", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`d-flex mb-3 ${msg.user ? "justify-content-end" : "justify-content-start"}`}
          >
            <div
              className={`p-2 rounded ${msg.user ? "bg-primary text-white" : "bg-light text-dark"}`}
              style={{ maxWidth: "70%" }}
            >
              {msg.user ? (
                msg.text
              ) : (
                <ul className="mb-0">
                  {msg.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="d-flex justify-content-start">
            <div className="p-2 rounded bg-light text-dark">Typing...</div>
          </div>
        )}
      </div>

      {/* Input and Buttons */}
      <div className="d-flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control me-2"
          placeholder="Enter your message..."
        />
        <button className="btn btn-primary me-2" onClick={handleSend}>
          Send
        </button>
        <button className="btn btn-danger" onClick={handleClearChat}>
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

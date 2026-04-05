import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Send, Loader2 } from "lucide-react";
import BackButton from "./BackButton.jsx";
import "./ChatBot.css";

const ChatBot = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    { role: "assistant", content: t("chat.welcome") },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await axios.post(
        "/api/chat/message",
        {
          message: text,
          conversationHistory: [...messages, userMsg],
        },
        { withCredentials: true }
      );

      const reply = res.data?.data?.reply || t("chat.error");
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t("chat.error") },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-page">
      <BackButton to="/dashboard" label={t("nav.dashboard")} />

      <div className="chat-container">
        <header className="chat-header">
          <p className="chat-kicker">Rooted</p>
          <h1 className="chat-title">{t("chat.title")}</h1>
          <p className="chat-subtitle">{t("chat.subtitle")}</p>
        </header>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble chat-bubble--${msg.role}`}
            >
              {msg.role === "assistant" && (
                <span className="chat-avatar">🌿</span>
              )}
              <div className="chat-bubble-content">
                {msg.content.split("\n").map((line, j) => (
                  <p key={j}>{line || "\u00A0"}</p>
                ))}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-bubble chat-bubble--assistant">
              <span className="chat-avatar">🌿</span>
              <div className="chat-bubble-content chat-thinking">
                <Loader2 size={16} className="chat-spinner" />
                {t("chat.thinking")}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form
          className="chat-input-bar"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <textarea
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t("chat.placeholder")}
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="chat-send-btn"
            disabled={!input.trim() || isLoading}
            aria-label={t("chat.send")}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;

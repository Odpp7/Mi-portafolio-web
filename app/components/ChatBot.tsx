"use client";

import { useState } from 'react';
import { Send, Bot, User, X } from 'lucide-react';
import '@/app/styles/ChatBot.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! 👋 Soy Magdiel, la asistente virtual del ingeniero Oscar Duque.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Agregar mensaje del usuario
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input, history: messages })
      });

      const data = await res.json();

      // Agregar respuesta del bot
      setMessages([...newMessages, { role: 'assistant', content: data.message }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: '❌ Error. Intenta de nuevo.' }]);
    }

    setIsLoading(false);
  };

  return (
    <div className="chatbot-container">

      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-trigger">
          <Bot size={20} />
          <span>Pregúntale a Magdiel</span>
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <div className="bot-avatar"><Bot size={20} /></div>
              <div>
                <h3>Magdiel</h3>
                <span>En línea</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.role}`}>
                <div className="message-avatar">
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className="message-content">
                  <p>{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message assistant">
                <div className="message-avatar"><Bot size={16} /></div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Escribe tu pregunta..."
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={isLoading || !input.trim()}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
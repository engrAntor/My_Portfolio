'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatBot } from './ChatBot';

export function ChatBotWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-20 right-6 z-50 flex items-center justify-center">
        {/* 3-layer deep pulse rings - only visible when chat is closed */}
        {!isChatOpen && (
          <>
            <span className="chat-ring-1 absolute w-14 h-14 rounded-full bg-blue-600 dark:bg-blue-500" />
            <span className="chat-ring-2 absolute w-14 h-14 rounded-full bg-purple-600 dark:bg-purple-500" />
            <span className="chat-ring-3 absolute w-14 h-14 rounded-full bg-indigo-500 dark:bg-indigo-400" />
          </>
        )}

        {/* Main button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`
            relative w-14 h-14 rounded-full flex items-center justify-center
            bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600
            dark:from-blue-400 dark:via-blue-500 dark:to-purple-500
            text-white shadow-xl
            hover:scale-110 hover:shadow-blue-500/40
            active:scale-95
            transition-all duration-300
            ${!isChatOpen ? 'chat-btn-glow' : ''}
          `}
          aria-label="Toggle Chat"
        >
          <span className={`transition-transform duration-300 ${isChatOpen ? 'rotate-90' : 'rotate-0'}`}>
            {isChatOpen ? <X size={22} /> : <MessageCircle size={22} />}
          </span>
        </button>

        {/* Label below button */}
        {!isChatOpen && (
          <p className="absolute -bottom-12 text-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 tracking-wide leading-tight w-20">
            Know me with the help of AI
          </p>
        )}
      </div>

      {/* Chatbot Component */}
      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </>
  );
}

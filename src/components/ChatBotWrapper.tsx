'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatBot } from './ChatBot';

export function ChatBotWrapper() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 dark:bg-blue-500 dark:hover:bg-blue-600"
        aria-label="Toggle Chat"
      >
        {isChatOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Component */}
      {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
    </>
  );
}

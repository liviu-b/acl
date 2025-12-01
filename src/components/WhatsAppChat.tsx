import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Paperclip, Smile } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const { t } = useTranslation();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Afișează butonul și apoi bula de bun venit
  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => {
        setShowWelcome(true);
      }, 1000);
    }, 2000);
    
    return () => {
      clearTimeout(buttonTimer);
    };
  }, []);

  // Auto-resize pentru textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    const encodedMessage = encodeURIComponent(message);
    // Numărul tău de telefon
    window.open(`https://wa.me/40758154490?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowWelcome(false); // Ascunde bula mică când deschizi chat-ul mare
  };

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Welcome Bubble (Bula mică deasupra butonului) */}
      {showWelcome && !isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-40 max-w-[250px] animate-fade-in-up origin-bottom-right"
        >
          <div className="bg-white text-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 relative">
            <button 
              onClick={(e) => { e.stopPropagation(); setShowWelcome(false); }}
              className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors text-gray-600 shadow-sm"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex items-start gap-3">
              <div className="bg-green-100 p-2 rounded-full">
                <MessageCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">{t('chat.welcome.title')}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{t('chat.welcome.message')}</p>
              </div>
            </div>
            {/* Săgeata bulei */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* 2. Chat Window (Fereastra principală) */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-out transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="bg-[#E5DDD5] w-[350px] sm:w-[380px] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          
          {/* Header - Stil WhatsApp */}
          <div className="bg-[#008069] p-4 flex justify-between items-center text-white shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#008069] rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-base">{t('chat.agent.name')}</h3>
                <p className="text-xs text-green-100 opacity-90">{t('chat.agent.status')}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Chat Body - Background Pattern */}
          <div className="flex-1 p-4 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
            {/* Mesaj de la "Agent" */}
            <div className="bg-white p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-sm max-w-[85%] mb-2 animate-fade-in">
              <p className="text-gray-800 text-sm leading-relaxed">
                {t('chat.intro')}
              </p>
              <span className="text-[10px] text-gray-400 float-right mt-1 ml-2">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-[#F0F2F5] p-3 flex items-end gap-2">
            <form onSubmit={handleSubmit} className="flex-1 flex items-end gap-2 bg-white rounded-2xl px-4 py-2 shadow-sm border border-gray-100">
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('chat.placeholder')}
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-gray-800 placeholder-gray-500 resize-none max-h-24 py-1"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
            </form>
            <button
              onClick={handleSubmit}
              disabled={!message.trim()}
              className={`p-3 rounded-full shadow-md transition-all duration-200 flex items-center justify-center ${
                message.trim() 
                  ? 'bg-[#008069] hover:bg-[#006d59] text-white transform hover:scale-105' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Send className="h-5 w-5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Toggle Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 group transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          {/* Pulsing Effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping duration-1000"></span>
          
          <div className="relative bg-[#25D366] hover:bg-[#20bd5a] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors">
            <MessageCircle className="h-8 w-8 text-white fill-white" />
            
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
              1
            </span>
          </div>
        </button>
      )}
    </>
  );
};

export default WhatsAppChat;
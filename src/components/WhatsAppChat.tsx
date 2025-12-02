import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const { t } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setShowNotification(true), 1000);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Mesajul scris de utilizator
    const encodedMessage = encodeURIComponent(message);
    
    // Deschide WhatsApp Web/App
    window.open(`https://wa.me/40758154490?text=${encodedMessage}`, '_blank');
    
    setMessage('');
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setShowNotification(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 font-sans">
      
      {/* --- Fereastra de Chat (Modern Glass Card) --- */}
      <div 
        className={`
          w-[360px] bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none absolute bottom-0 right-0'}
        `}
      >
        {/* Header cu Gradient */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 pb-8 relative overflow-hidden">
          {/* Cercuri decorative background */}
          <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-24 h-24 bg-black/5 rounded-full blur-xl"></div>

          <div className="flex justify-between items-start relative z-10">
            <div className="flex items-center gap-4">
              {/* Avatar Agent */}
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 text-white font-bold text-lg shadow-lg">
                  <span className="animate-pulse">👋</span>
                </div>
                {/* Status Dot */}
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-emerald-600 rounded-full"></div>
              </div>
              
              <div className="text-white">
                <h3 className="font-bold text-lg leading-tight">{t('chat.agent.name')}</h3>
                <p className="text-emerald-100 text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full inline-block mt-1">
                  {t('chat.agent.status')}
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Corpul Chat-ului */}
        <div className="bg-slate-50 h-[320px] p-5 overflow-y-auto flex flex-col relative">
          
          {/* Mesajul de întâmpinare (Bot) */}
          <div className="flex gap-3 animate-fade-in-up mt-2">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%] text-slate-700 text-sm leading-relaxed relative group hover:shadow-md transition-shadow">
              <p>{t('chat.intro')}</p>
              <span className="text-[10px] text-slate-400 mt-2 block font-medium">
                {t('chat.agent.name')} • Acum
              </span>
            </div>
          </div>
          
          {/* Spațiu gol pentru scroll */}
          <div ref={messagesEndRef} />
        </div>

        {/* Zona de Input (Footer) */}
        <div className="p-4 bg-white border-t border-slate-100">
          <form onSubmit={handleSubmit} className="relative flex items-center group">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('chat.placeholder')}
              // MODIFICARE AICI: am schimbat 'text-sm' cu 'text-base md:text-sm'
              className="w-full bg-slate-100 text-slate-700 placeholder:text-slate-400 pl-5 pr-12 py-3.5 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white transition-all shadow-inner text-base md:text-sm"
            />
            <button
              type="submit"
              disabled={!message.trim()}
              className={`
                absolute right-2 p-2 rounded-full transition-all duration-300
                ${message.trim() 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg scale-100 hover:scale-110' 
                  : 'bg-slate-200 text-slate-400 scale-90 cursor-not-allowed'}
              `}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <div className="text-center mt-2">
             <span className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
               Powered by <span className="font-semibold text-emerald-600">WhatsApp</span>
             </span>
          </div>
        </div>
      </div>

      {/* --- Butonul Principal (Trigger) --- */}
      <div className="relative group">
        {/* Notificare tip "Bubble" (apare când chat-ul e închis) */}
        {showNotification && !isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap z-0">
             <div className="bg-white px-4 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 animate-fade-in-left origin-right">
               <span className="text-sm font-medium text-slate-700">{t('chat.welcome.title')}</span>
               <ChevronRight className="h-3 w-3 text-emerald-500" />
             </div>
          </div>
        )}

        <button
          onClick={handleToggle}
          className={`
            relative h-16 w-16 flex items-center justify-center rounded-full shadow-2xl transition-all duration-300 z-10
            ${isOpen 
              ? 'bg-slate-800 rotate-90' 
              : 'bg-gradient-to-br from-emerald-400 to-teal-600 hover:scale-110 hover:shadow-emerald-500/30'}
          `}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <>
              <MessageCircle className="h-8 w-8 text-white animate-bounce-slow" />
              {/* Punct roșu de notificare */}
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 border-2 border-white rounded-full"></span>
            </>
          )}
        </button>
        
        {/* Inel pulsatil în jurul butonului */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 animate-ping -z-10"></span>
        )}
      </div>
    </div>
  );
};

export default WhatsAppChat;
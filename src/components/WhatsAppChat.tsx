import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => {
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/40758154490?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 w-80 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border-b border-white/10 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <h3 className="font-semibold text-white">{t('chat.title')}</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Chat Content */}
          <div className="p-4 space-y-4">
            {/* Message Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-transparent resize-none text-white placeholder-gray-400"
                  rows={3}
                  required
                ></textarea>
                <div className="absolute bottom-2 right-2 text-gray-400 text-xs">
                  {message.length}/500
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30 backdrop-blur-sm border border-white/10 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group"
              >
                {t('chat.button')}
                <Send className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group"
          aria-label="Open chat"
        >
          {/* Glowing effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500/30 to-green-600/30 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse transition-opacity"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
        </button>
      )}
    </div>
  );
};

export default WhatsAppChat;
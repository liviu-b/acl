import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const { t } = useTranslation();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/40758154490?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Welcome Message Popup */}
      {showWelcome && !isOpen && (
        <div 
          className="fixed bottom-24 right-5 z-40 max-w-xs transform transition-all duration-500 animate-float"
          style={{
            animation: 'float 3s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          }}
        >
          <div className="bg-green-500 text-white p-4 rounded-lg shadow-lg relative">
            <button 
              onClick={() => setShowWelcome(false)}
              className="absolute -top-2 -right-2 bg-green-600 rounded-full p-1"
            >
              <X className="h-4 w-4" />
            </button>
            <h4 className="font-bold mb-1">{t('chat.welcome.title')}</h4>
            <p className="text-sm">{t('chat.welcome.message')}</p>
            <div className="absolute -bottom-2 right-4 transform rotate-45 w-4 h-4 bg-green-500"></div>
          </div>
        </div>
      )}

      <div className="fixed bottom-5 right-5 z-50">
        {isOpen ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 w-80 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right shadow-xl">
            {/* Header */}
            <div className="bg-green-500 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <h3 className="font-semibold text-white">{t('chat.title')}</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat Content */}
            <div className="p-4 space-y-4 bg-white">
              {/* Message Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('chat.placeholder')}
                    className="w-full p-4 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-gray-800 placeholder-gray-500"
                    rows={3}
                    required
                  ></textarea>
                  <div className="absolute bottom-2 right-2 text-gray-400 text-xs">
                    {message.length}/500
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group"
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
            <div className="relative bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </button>
        )}
      </div>
    </>
  );
};

export default WhatsAppChat;
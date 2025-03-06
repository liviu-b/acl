import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { t } = useTranslation();

  // Show chat button and toast after a delay
  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const toastTimer = setTimeout(() => {
      setShowToast(true);
    }, 3000);

    const hideToastTimer = setTimeout(() => {
      setShowToast(false);
    }, 8000);
    
    return () => {
      clearTimeout(buttonTimer);
      clearTimeout(toastTimer);
      clearTimeout(hideToastTimer);
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
      {/* Welcome Toast */}
      <div
        className={`
          fixed bottom-24 right-5 z-50 bg-white rounded-lg shadow-xl p-4 w-80
          transform transition-all duration-500 
          ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
            <MessageCircle className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Welcome to ACL-Smart Software!
            </p>
            <p className="mt-1 text-sm text-gray-500">
              We are here for your digital needs. Click the chat icon to get in touch!
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="ml-4 flex-shrink-0 flex"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          </button>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        {isOpen ? (
          <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
            <div className="bg-green-500 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">{t('chat.title')}</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="p-4">
              <div className="bg-green-50 rounded-lg p-3 mb-4">
                <p className="text-gray-700 font-medium">
                  Welcome to ACL-Smart Software!
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">
                {t('chat.message')}
              </p>
              
              <form onSubmit={handleSubmit}>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('chat.placeholder')}
                  className="w-full p-3 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  rows={3}
                  required
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                >
                  {t('chat.button')}
                  <MessageCircle className="h-5 w-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Open chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
};

export default WhatsAppChat;
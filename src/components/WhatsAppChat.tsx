import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat = () => {
  const { t } = useTranslation();

  // Asigură-te că numărul este în format internațional, fără '+' sau '00' în față
  // Exemplu: 40722123456 pentru România
  const phoneNumber = "40722000000"; // ÎNLOCUIEȘTE CU NUMĂRUL TĂU REAL

  // Preluăm mesajul din traduceri sau folosim un fallback
  const message = t('whatsapp.default_message', "Salut! Sunt interesat de serviciile voastre.");

  // IMPORTANT: Codificăm mesajul pentru a fi valid în URL
  const encodedMessage = encodeURIComponent(message);

  // Construim URL-ul complet
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip opțional */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        {t('whatsapp.chat_with_us', "Vorbește cu noi pe WhatsApp")}
      </span>
    </a>
  );
};

export default WhatsAppChat;
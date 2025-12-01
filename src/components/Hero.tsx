import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importăm hook-ul de traducere
import { Link } from 'react-router-dom';
// ... alte importuri (ex. imaginea de fundal)

const Hero = () => {
  const { t } = useTranslation(); // 2. Inițializăm hook-ul

  return (
    <div className="relative h-screen">
      {/* ... codul pentru imaginea de fundal ... */}
      
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        {/* 3. Folosim t('hero.title') și micșorăm fontul (ex: de la text-6xl la text-4xl) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
          {t('hero.title')}
        </h1>
        
        {/* 4. Asigură-te că și subtitlul este tradus și are font mai mic */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          {t('hero.subtitle')}
        </p>

        <Link 
          to="/contact" 
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md transition-colors text-lg"
        >
          {t('hero.cta')}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const GDPRPolicy = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 pt-32 relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-4xl mx-auto hover:bg-white/10 transition-colors duration-300">
          <h1 className="text-3xl font-bold mb-6 text-white">{t('gdpr.title')}</h1>
          <p className="text-gray-300 mb-8">{t('gdpr.lastUpdated')}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.introduction.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.introduction.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.dataCollection.title')}</h2>
              
              <h3 className="text-xl font-medium mb-2 text-white">{t('gdpr.dataCollection.types.title')}</h3>
              <p className="text-gray-300 mb-3">
                {t('gdpr.dataCollection.types.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>{t('gdpr.dataCollection.types.item1')}</li>
                <li>{t('gdpr.dataCollection.types.item2')}</li>
                <li>{t('gdpr.dataCollection.types.item3')}</li>
                <li>{t('gdpr.dataCollection.types.item4')}</li>
                <li>{t('gdpr.dataCollection.types.item5')}</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 text-white">{t('gdpr.dataCollection.purpose.title')}</h3>
              <p className="text-gray-300 mb-3">
                {t('gdpr.dataCollection.purpose.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>{t('gdpr.dataCollection.purpose.item1')}</li>
                <li>{t('gdpr.dataCollection.purpose.item2')}</li>
                <li>{t('gdpr.dataCollection.purpose.item3')}</li>
                <li>{t('gdpr.dataCollection.purpose.item4')}</li>
                <li>{t('gdpr.dataCollection.purpose.item5')}</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 text-white">{t('gdpr.dataCollection.legal.title')}</h3>
              <p className="text-gray-300 mb-3">
                {t('gdpr.dataCollection.legal.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>{t('gdpr.dataCollection.legal.item1')}</li>
                <li>{t('gdpr.dataCollection.legal.item2')}</li>
                <li>{t('gdpr.dataCollection.legal.item3')}</li>
                <li>{t('gdpr.dataCollection.legal.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.protection.title')}</h2>
              <p className="text-gray-300 mb-3">
                {t('gdpr.protection.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>{t('gdpr.protection.item1')}</li>
                <li>{t('gdpr.protection.item2')}</li>
                <li>{t('gdpr.protection.item3')}</li>
                <li>{t('gdpr.protection.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.rights.title')}</h2>
              <p className="text-gray-300 mb-3">
                {t('gdpr.rights.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>{t('gdpr.rights.item1')}</li>
                <li>{t('gdpr.rights.item2')}</li>
                <li>{t('gdpr.rights.item3')}</li>
                <li>{t('gdpr.rights.item4')}</li>
                <li>{t('gdpr.rights.item5')}</li>
                <li>{t('gdpr.rights.item6')}</li>
              </ul>
              <p className="text-gray-300">
                {t('gdpr.rights.contact')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.retention.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.retention.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.sharing.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.sharing.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.international.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.international.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.breach.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.breach.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.changes.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.changes.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('gdpr.contact.title')}</h2>
              <p className="text-gray-300">
                {t('gdpr.contact.text')}
              </p>
              <div className="mt-3 text-gray-300">
                <p className="font-semibold text-white">{t('gdpr.contact.dpo')}</p>
                <p>{t('gdpr.contact.company')}</p>
                <p>{t('gdpr.contact.email')}: office@acl-smartsoftware.tech</p>
                <p>{t('gdpr.contact.phone')}: +40 758 154 490</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDPRPolicy;
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 pt-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-white">{t('privacy.title')}</h1>
          <p className="text-gray-300 mb-8">{t('privacy.lastUpdated')}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.introduction.title')}</h2>
              <p className="text-gray-300">
                {t('privacy.introduction.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.infoCollect.title')}</h2>
              
              <h3 className="text-xl font-medium mb-2 text-white">{t('privacy.infoCollect.personal.title')}</h3>
              <p className="text-gray-300 mb-3">
                {t('privacy.infoCollect.personal.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>{t('privacy.infoCollect.personal.item1')}</li>
                <li>{t('privacy.infoCollect.personal.item2')}</li>
                <li>{t('privacy.infoCollect.personal.item3')}</li>
                <li>{t('privacy.infoCollect.personal.item4')}</li>
                <li>{t('privacy.infoCollect.personal.item5')}</li>
              </ul>

              <h3 className="text-xl font-medium mb-2 text-white">{t('privacy.infoCollect.automatic.title')}</h3>
              <p className="text-gray-300 mb-3">
                {t('privacy.infoCollect.automatic.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>{t('privacy.infoCollect.automatic.item1')}</li>
                <li>{t('privacy.infoCollect.automatic.item2')}</li>
                <li>{t('privacy.infoCollect.automatic.item3')}</li>
                <li>{t('privacy.infoCollect.automatic.item4')}</li>
                <li>{t('privacy.infoCollect.automatic.item5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.infoUse.title')}</h2>
              <p className="text-gray-300 mb-3">
                {t('privacy.infoUse.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>{t('privacy.infoUse.item1')}</li>
                <li>{t('privacy.infoUse.item2')}</li>
                <li>{t('privacy.infoUse.item3')}</li>
                <li>{t('privacy.infoUse.item4')}</li>
                <li>{t('privacy.infoUse.item5')}</li>
                <li>{t('privacy.infoUse.item6')}</li>
                <li>{t('privacy.infoUse.item7')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.dataSharing.title')}</h2>
              <p className="text-gray-300 mb-3">
                {t('privacy.dataSharing.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>{t('privacy.dataSharing.item1')}</li>
                <li>{t('privacy.dataSharing.item2')}</li>
                <li>{t('privacy.dataSharing.item3')}</li>
                <li>{t('privacy.dataSharing.item4')}</li>
              </ul>
              <p className="text-gray-300">
                {t('privacy.dataSharing.note')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.dataSecurity.title')}</h2>
              <p className="text-gray-300 mb-3">
                {t('privacy.dataSecurity.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-1">
                <li>{t('privacy.dataSecurity.item1')}</li>
                <li>{t('privacy.dataSecurity.item2')}</li>
                <li>{t('privacy.dataSecurity.item3')}</li>
                <li>{t('privacy.dataSecurity.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.userRights.title')}</h2>
              <p className="text-gray-300 mb-3">
                {t('privacy.userRights.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
                <li>{t('privacy.userRights.item1')}</li>
                <li>{t('privacy.userRights.item2')}</li>
                <li>{t('privacy.userRights.item3')}</li>
                <li>{t('privacy.userRights.item4')}</li>
                <li>{t('privacy.userRights.item5')}</li>
              </ul>
              <p className="text-gray-300">
                {t('privacy.userRights.note')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.cookies.title')}</h2>
              <p className="text-gray-300">
                {t('privacy.cookies.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.changes.title')}</h2>
              <p className="text-gray-300">
                {t('privacy.changes.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3 text-white">{t('privacy.contact.title')}</h2>
              <p className="text-gray-300">
                {t('privacy.contact.text')}
              </p>
              <div className="mt-3 text-gray-300">
                <p className="font-semibold text-white">{t('privacy.contact.company')}</p>
                <p>{t('privacy.contact.email')}: office@acl-smartsoftware.tech</p>
                <p>{t('privacy.contact.phone')}: +40 758 154 490</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
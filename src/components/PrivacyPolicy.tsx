import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 pt-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
          <p className="text-gray-600 mb-8">{t('privacy.lastUpdated')}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.introduction.title')}</h2>
              <p className="text-gray-700">
                {t('privacy.introduction.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.infoCollect.title')}</h2>
              
              <h3 className="text-xl font-medium mb-2">{t('privacy.infoCollect.personal.title')}</h3>
              <p className="text-gray-700 mb-3">
                {t('privacy.infoCollect.personal.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>{t('privacy.infoCollect.personal.item1')}</li>
                <li>{t('privacy.infoCollect.personal.item2')}</li>
                <li>{t('privacy.infoCollect.personal.item3')}</li>
                <li>{t('privacy.infoCollect.personal.item4')}</li>
                <li>{t('privacy.infoCollect.personal.item5')}</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">{t('privacy.infoCollect.automatic.title')}</h3>
              <p className="text-gray-700 mb-3">
                {t('privacy.infoCollect.automatic.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('privacy.infoCollect.automatic.item1')}</li>
                <li>{t('privacy.infoCollect.automatic.item2')}</li>
                <li>{t('privacy.infoCollect.automatic.item3')}</li>
                <li>{t('privacy.infoCollect.automatic.item4')}</li>
                <li>{t('privacy.infoCollect.automatic.item5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.infoUse.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('privacy.infoUse.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
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
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.dataSharing.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('privacy.dataSharing.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>{t('privacy.dataSharing.item1')}</li>
                <li>{t('privacy.dataSharing.item2')}</li>
                <li>{t('privacy.dataSharing.item3')}</li>
                <li>{t('privacy.dataSharing.item4')}</li>
              </ul>
              <p className="text-gray-700">
                {t('privacy.dataSharing.note')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.dataSecurity.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('privacy.dataSecurity.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('privacy.dataSecurity.item1')}</li>
                <li>{t('privacy.dataSecurity.item2')}</li>
                <li>{t('privacy.dataSecurity.item3')}</li>
                <li>{t('privacy.dataSecurity.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.userRights.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('privacy.userRights.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>{t('privacy.userRights.item1')}</li>
                <li>{t('privacy.userRights.item2')}</li>
                <li>{t('privacy.userRights.item3')}</li>
                <li>{t('privacy.userRights.item4')}</li>
                <li>{t('privacy.userRights.item5')}</li>
              </ul>
              <p className="text-gray-700">
                {t('privacy.userRights.note')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.cookies.title')}</h2>
              <p className="text-gray-700">
                {t('privacy.cookies.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.changes.title')}</h2>
              <p className="text-gray-700">
                {t('privacy.changes.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('privacy.contact.title')}</h2>
              <p className="text-gray-700">
                {t('privacy.contact.text')}
              </p>
              <div className="mt-3">
                <p className="font-semibold">{t('privacy.contact.company')}</p>
                <p>{t('privacy.contact.email')}: office@acl-smartsoftware.tech</p>
                <p>{t('privacy.contact.phone')}: +40 758 158 490</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
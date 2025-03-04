import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const GDPRPolicy = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 pt-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">{t('gdpr.title')}</h1>
          <p className="text-gray-600 mb-8">{t('gdpr.lastUpdated')}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.introduction.title')}</h2>
              <p className="text-gray-700">
                {t('gdpr.introduction.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.dataCollection.title')}</h2>
              
              <h3 className="text-xl font-medium mb-2">{t('gdpr.dataCollection.types.title')}</h3>
              <p className="text-gray-700 mb-3">
                {t('gdpr.dataCollection.types.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>{t('gdpr.dataCollection.types.item1')}</li>
                <li>{t('gdpr.dataCollection.types.item2')}</li>
                <li>{t('gdpr.dataCollection.types.item3')}</li>
                <li>{t('gdpr.dataCollection.types.item4')}</li>
                <li>{t('gdpr.dataCollection.types.item5')}</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">{t('gdpr.dataCollection.purpose.title')}</h3>
              <p className="text-gray-700 mb-3">
                {t('gdpr.dataCollection.purpose.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>{t('gdpr.dataCollection.purpose.item1')}</li>
                <li>{t('gdpr.dataCollection.purpose.item2')}</li>
                <li>{t('gdpr.dataCollection.purpose.item3')}</li>
                <li>{t('gdpr.dataCollection.purpose.item4')}</li>
                <li>{t('gdpr.dataCollection.purpose.item5')}</li>
              </ul>

              <h3 className="text-xl font-medium mb-2">{t('gdpr.dataCollection.legal.title')}</h3>
              <p className="text-gray-700 mb-3">
                {t('gdpr.dataCollection.legal.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('gdpr.dataCollection.legal.item1')}</li>
                <li>{t('gdpr.dataCollection.legal.item2')}</li>
                <li>{t('gdpr.dataCollection.legal.item3')}</li>
                <li>{t('gdpr.dataCollection.legal.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.protection.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('gdpr.protection.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>{t('gdpr.protection.item1')}</li>
                <li>{t('gdpr.protection.item2')}</li>
                <li>{t('gdpr.protection.item3')}</li>
                <li>{t('gdpr.protection.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.rights.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('gdpr.rights.intro')}
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                <li>{t('gdpr.rights.item1')}</li>
                <li>{t('gdpr.rights.item2')}</li>
                <li>{t('gdpr.rights.item3')}</li>
                <li>{t('gdpr.rights.item4')}</li>
                <li>{t('gdpr.rights.item5')}</li>
                <li>{t('gdpr.rights.item6')}</li>
              </ul>
              <p className="text-gray-700">
                {t('gdpr.rights.contact')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.retention.title')}</h2>
              <p className="text-gray-700">
                {t('gdpr.retention.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.sharing.title')}</h2>
              <p className="text-gray-700">
                {t('gdpr.sharing.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.international.title')}</h2>
              <p className="text-gray-700">
                {t('gdpr.international.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.breach.title')}</h2>
              <p className="text-gray-700">
                {t('gdpr.breach.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.changes.title')}</h2>
              <p className="text-gray-700">
                {t('gdpr.changes.text')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">{t('gdpr.contact.title')}</h2>
              <p className="text-gray-700 mb-3">
                {t('gdpr.contact.text')}
              </p>
              <div className="mt-3">
                <p className="font-semibold">{t('gdpr.contact.dpo')}</p>
                <p>{t('gdpr.contact.company')}</p>
                <p>{t('gdpr.contact.email')}: office@acl-smartsoftware.tech</p>
                <p>{t('gdpr.contact.phone')}: +40 758 158 490</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GDPRPolicy;
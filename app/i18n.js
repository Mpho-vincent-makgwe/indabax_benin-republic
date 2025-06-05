import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translations directly
import enTranslations from './locales/en/translation.json';
import frTranslations from './locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations }
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
    },
    supportedLngs: ['en', 'fr'],
    keySeparator: '.', 
  });


export default i18n;
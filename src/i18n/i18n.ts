import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// List of supported languages
const supportedLngs = ['en', 'es']; // Add more languages as needed

// Default namespace to load for all pages
const defaultNS = 'common';

i18n
  // Load translation using http backend
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    supportedLngs,
    fallbackLng: 'en',
    defaultNS,
    ns: [defaultNS, 'patient-info'], // Add other namespaces as needed
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    react: {
      useSuspense: true,
    },
  });

// Function to change language with error handling
export const changeLanguage = async (lng: string) => {
  try {
    if (!supportedLngs.includes(lng)) {
      console.warn(`Language '${lng}' is not supported. Falling back to 'en'.`);
      lng = 'en';
    }
    await i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng;
    // Update direction based on language if needed
    document.documentElement.dir = ['ar', 'he'].includes(lng) ? 'rtl' : 'ltr';
    return true;
  } catch (error) {
    console.error('Failed to change language:', error);
    return false;
  }
};

export default i18n;

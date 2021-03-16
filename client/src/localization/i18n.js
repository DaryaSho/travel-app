import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import eng from './eng';
import rus from './rus';
import bel from './bel';

i18n.use(LanguageDetector).init({
  resources: {
    eng,
    rus,
    bel,
  },
  fallbackLng: 'eng',
  debug: false,

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false,

  interpolation: {
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;

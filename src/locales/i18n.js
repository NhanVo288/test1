import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { localStorageGetItem } from 'src/utils/storage-available';
import { defaultLang } from './config-lang';
import translationEn from './langs/en.json';
import translationJa from './langs/ja.json';
import translationKo from './langs/ko.json';
import translationTh from './langs/th.json';
import translationVi from './langs/vi.json';
import translationZh from './langs/zh.json';

// ----------------------------------------------------------------------

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: translationEn },
      ja: { translations: translationJa },
      ko: { translations: translationKo },
      th: { translations: translationTh },
      vi: { translations: translationVi },
      zh: { translations: translationZh },
    },
    lng,
    fallbackLng: lng,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

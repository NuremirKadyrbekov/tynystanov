import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import KG from './locales/kg/kg.json';
import RU from './locales/ru/ru.json';
import EN from './locales/en/en.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      kg: {
        translation: KG
      },
      ru: {
        translation: RU
      },
      en: {
        translation:EN
      }
    },
    lng: 'ru',  
    fallbackLng: 'ru', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;

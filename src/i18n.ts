import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to our landing page!",
        change_language: "Change Language",
      },
    },
    ua: {
      translation: {
        welcome: "Ласкаво просимо на наш лендинг!",
        change_language: "Змінити мову",
      },
    },
  },
  lng: "en",
  fallbackLng: "ua",
  interpolation: { escapeValue: false },
});

export default i18n;

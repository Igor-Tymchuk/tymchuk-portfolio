import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { store } from "./redux/store.ts";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: "English",
        about_me: "About Me",
        my_projects: "My Projects",
        contacts: "Contacts",
        hero_desc:
          "I will turn your ideas into functional and beautiful programs!",
        contact_me: "Contact Me",
      },
    },
    ua: {
      translation: {
        language: "Українська",
        about_me: "Про мене",
        my_projects: "Мої проєкти",
        contacts: "Контакти",
        hero_desc: "Я втілю ваші ідеї в функціональні та красиві програми!",
        contact_me: "Зв'язатись зі мною",
      },
    },
  },
  lng: "en",
  fallbackLng: "ua",
  interpolation: { escapeValue: false },
});
store.subscribe(() => {
  const state = store.getState();
  i18n.changeLanguage(state.language.lang);
});
export default i18n;

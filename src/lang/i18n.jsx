import { initReactI18next } from "react-i18next";
import tansRu from './ru.json'
import tansUz from './uz.json'
import i18n from "i18next";

const resources = {
  ru: {
    translation: tansRu
  },
  uz: {
    translation: tansUz
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n

import { initReactI18next } from "react-i18next";
import tansUz from './kiril.json'
import tansRu from './ru.json'
import tansOz from './uz.json'
import i18n from "i18next";

const resources = {
  ru: {
    translation: tansRu
  },
  oz: {
    translation: tansOz
  },
  uz: {
    translation: tansUz
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') != undefined ? localStorage.getItem('language') : "",
    fallbackLng: "oz",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n

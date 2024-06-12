import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/scss/style.min.css";
import 'primeicons/primeicons.css'
import FlagIcon from "vue-flag-icon";
import PrimeVue from "primevue/config";
import router from "../src/router/router.js";

function loadLocaleMessages() {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

const globalOptions = {
  mode: "auto",
};

let lang = "en";
if (localStorage.getItem("lang")) {
  lang = localStorage.getItem("lang");
}

const i18n = createI18n({
  locale: lang, // set locale
  // allowComposition: true, // you need to specify that!
  fallbackLocale: lang, // set fallback locale
  messages: loadLocaleMessages(), // set locale messages
});

createApp(App).use(PrimeVue).use(router).use(FlagIcon).use(i18n).mount("#app");

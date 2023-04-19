import { App } from "vue";
import { createI18n, I18n } from "vue-i18n";
import { useLocaleStoreWithOut } from "../store/module/locale";
export let i18n: I18n;

export function changeLocale(value) {
    const globalI18n = i18n.global;
    globalI18n.locale = value;
    const store = useLocaleStoreWithOut();
    store.setLocale(value)
}

export async function setI18n(app: App) {
  const messages = {
    en: {
      message: {
        hello: "hello world",
      },
    },
    ja: {
      message: {
        hello: "こんにちは、世界",
      },
    },
  };

  const store = useLocaleStoreWithOut();
  i18n = createI18n({
    locale: store.locale, // set locale
    fallbackLocale: "en", // set fallback locale
    messages: messages,
  });
  app.use(i18n);
}

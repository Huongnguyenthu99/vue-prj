import { createPinia, defineStore } from "pinia";

const store = createPinia();

const lsLocale = localStorage.getItem('language') || 'en'

const useLocaleStore = defineStore('locale', { 
    state: () => ({
        locale: lsLocale
    }),
    actions: {
        setLocale(value) {
            this.locale = value;
            localStorage.setItem('language', value);
        }
    }
})

export const useLocaleStoreWithOut = () => {
    return useLocaleStore(store);
}
import { defineStore, createPinia } from "pinia";

const store = createPinia();

export const useCounterStore = defineStore('alerts', {
    state: () => ({
        currentLanguage: "ja",
        count: 0,
        name: 'Equado'
    }),
    actions: {
        increment() {
            this.count++;
        },
        languageChange(lang) {
            this.currentLanguage = lang;
        }
    }

})

export const useCounterStoreWithOut = () => {
    return useCounterStore(store);
}
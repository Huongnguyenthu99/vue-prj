import { defineStore, createPinia } from "pinia";

const store = createPinia();

export const useCounterStore = defineStore('alerts', {
    state: () => ({
        count: 0,
        name: 'Equado'
    }),
    actions: {
        increment() {
            this.count++;
        }
    }

})

export const useCounterStoreWithOut = () => {
    return useCounterStore(store);
}
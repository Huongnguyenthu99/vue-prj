import { defineStore } from "pinia";

export const useCounterStore = defineStore('alerts', {
    state: () => ({
        count: 0,
        name: 'Equado'
    }),
    actions:  {
        increment() {
            this.count++;
        }



        
    }

})
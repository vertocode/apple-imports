import { defineStore } from "pinia";
export const useToastStore = defineStore("toastStore",  {
    state: () => ({
        toasted: [],
    })
})

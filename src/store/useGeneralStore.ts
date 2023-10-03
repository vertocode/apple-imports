import { defineStore } from "pinia";

export const useGeneralStore = defineStore("generalStore",  {
    state: () => ({
        isLoading: false,
    })
})

import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
    state: () => ({
        allUsers: [],
        userData: {},
    }),
    persist: true
})

import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        cart: [],
    }),
    persist: true
});

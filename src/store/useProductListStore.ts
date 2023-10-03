import { defineStore } from "pinia";

export const useProductListStore = defineStore("productStore",  {
    state: () => ({
        products: [],
        productListTypes: [],
    })
})
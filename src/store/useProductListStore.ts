import { defineStore } from "pinia";
import {Products} from "../services/product/ProductList";

const product = new Products()

export const useProductListStore = defineStore("productStore",  {
    state: (): any => ({
        products: [],
        productListTypes: [],
        loading: false
    }),
    actions: {
        async getProductByType(type: string) {
            this.loading = true
            this.products = await product.getProductByType(type)
            this.loading = false
        }
    }
})
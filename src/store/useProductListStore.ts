import { defineStore } from "pinia";
import {Products} from "../services/product/ProductList";
import {Product, ProductListType} from "../typing/Product";

const product = new Products()

type State = {
    products: Product[]
    productListTypes: ProductListType[]
    loading: boolean
}
export const useProductListStore = defineStore("productStore",  {
    state: (): State => ({
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
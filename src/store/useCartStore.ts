import { defineStore } from 'pinia'
import { Product } from '../typing/Product'

type State = {
    cart: Product[]
}
export const useCartStore = defineStore('cartStore', {
	state: (): State => ({
		cart: [],
	}),
	persist: true
})

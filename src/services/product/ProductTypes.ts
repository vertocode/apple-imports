import { Store } from 'vuex'
import {Api} from "../Api";

const api = new Api()

export class ProductTypes {
    async getProductListTypes() {
        try {
            const response = await api.get('/product-types')
            return response.data
        } catch (error: unknown | any) {
            throw new Error(error)
        }
    }
}

import { Store } from 'vuex'
import {Api} from "../Api";

const api = new Api()

export class ProductTypes {
    async getProductListTypes(store: Store<any>) {
        if (store.state.productListTypes.length) {
            return store.state.productListTypes
        }

        try {
            const response = await api.get('/product-types')
            store.state.productListTypes = response.data
        } catch (error: unknown | any) {
            throw new Error(error)
        }
    }
}

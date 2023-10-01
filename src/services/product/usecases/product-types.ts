import axios from 'axios'
import { API } from '../../../data/api'
import { Store } from 'vuex'

export function getProductListTypes(store: Store<any>): any {
    if (store.state.productListTypes.length) {
        return store.state.productListTypes
    }
    return axios.get(`${API}/product-types`)
        .then(({ data: types }) => {
            store.state.productListTypes = types
            return types
        }).catch(error => {
            throw new Error(error)
        })
}

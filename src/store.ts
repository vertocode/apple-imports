import { createStore } from 'vuex'
import AllUsers from './data/AllUsers.json'
import AllProducts from './data/AllProducts.json'

export default createStore({
    state: {
        isAdmin: false,
        userData: {},
        allUsers: AllUsers,
        products: AllProducts
    },
    mutations: {
        addProducts(state, payload) {
            state.products.push(payload)
        },
        recoverState(state, payload) {
            state = payload
        },
        setUserLogged(state, payload) {
            console.log(payload)
            if (!payload?.picture) {
                payload.picture = 'https://i.imgur.com/QyxI8pB.png'
            }
            state.userData = payload
        }
    },
    actions: {

    },
    getters: {

    }
})
import { createStore } from 'vuex'
import AllUsers from './data/AllUsers.json'

export default createStore({
    state: {
        isAdmin: false,
        userData: {},
        allUsers: AllUsers,
        products: []
    },
    mutations: {
        setAllProducts(state, payload) {
            state.products = payload
        },
        recoverState(state, payload) {
            state = payload
        },
        setUserLogged(state, payload) {
            if (!payload?.picture) {
                payload.picture = 'https://i.imgur.com/QyxI8pB.png'
            }
            state.userData = payload
        },
        updateUserData(state, payload) {
            state.userData = payload
        }
    },
    actions: {

    },
    getters: {

    }
})
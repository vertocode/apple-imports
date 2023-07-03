import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

export default createStore({
    state: {
        isAdmin: false,
        userData: {},
        allUsers: [],
        products: [],
        showNavbar: true
    },
    mutations: {
        setAllUsers(state, payload) {
            console.log(payload)
            state.allUsers = payload
        },
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

    },
    plugins: [new VuexPersistence().plugin]
})
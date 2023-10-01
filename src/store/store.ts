import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

// TODO: Migrate to Pinia.
export default createStore({
    state: {
        isAdmin: false,
        userData: {},
        allUsers: [],
        products: [],
        productListTypes: [],
        cart: [],
        toasted: {
            isEnabled: false,
            title: 'something',
            description: null,
            status: 'error',
        },
        showNavbar: true,
    },
    mutations: {
        setAllUsers(state, payload) {
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
        },
        addItemCart(state, payload: any) {
            // @ts-ignore
            state.cart.push(payload)
        },
        enableToast(state, payload) {
            state.toasted.isEnabled = payload
        },
        changeToastData(state, payload) {
            state.toasted = payload
        },
        deleteItemCart(state, payload: number) {
            state.cart = state.cart.filter(product => product !== state.cart[payload])
        }
    },
    actions: {
        async useGlobalToast({ commit }, payload) {
            commit('changeToastData', {
                isEnabled: true,
                ...payload
            })
            await setTimeout(() =>commit('enableToast', false), 5000)
        }
    },
    getters: {

    },
    plugins: [new VuexPersistence().plugin]
})
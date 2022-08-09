import { createWebHistory, createRouter } from "vue-router"
import ProductList from "../components/ProductList/ProductList.vue"
import Login from "../components/Login/Login.vue"

const routes = [
    {
        path: "/product-list",
        name: "ProductList",
        component: ProductList,
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
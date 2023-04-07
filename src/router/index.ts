import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router"
import ProductList from "../Pages/ProductList.vue"
import Login from "../Pages/Login.vue"
import AddNewProduct from "../Pages/AddNewProduct.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/product-list"
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/product-list",
        name: "ProductList",
        component: ProductList,
    },
    {
        path: "/add-new-product",
        name: 'AddNewProduct',
        component: AddNewProduct
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
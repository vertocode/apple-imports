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
        path: "/*",
        redirect: "/product-list"
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/product-list",
        redirect: '/product-list/apple/iphone'
    },
    {
        path: "/product-list/:id",
        redirect: '/product-list/apple/iphone'
    },
    {
        path: "/product-list/apple/:id",
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
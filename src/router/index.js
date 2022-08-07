import { createWebHistory, createRouter } from "vue-router"
import ProductList from "../components/ProductList.vue"

const routes = [
    {
        path: "/product-list",
        name: "ProductList",
        component: ProductList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
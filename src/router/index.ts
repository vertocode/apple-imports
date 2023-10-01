import { createWebHistory, createRouter, RouteRecordRaw, RouteLocationNormalized} from "vue-router"
import Login from "../Pages/Login.vue"
import AddNewProduct from "../Pages/AddNewProduct.vue"
import NotFound from "../Pages/NotFound.vue";
import Cart from "../Pages/Cart.vue";
import ProductListProducts from "../components/ProductList/ProductListProducts.vue";
import ProductListTypes from "../components/ProductList/ProductListTypes.vue";
import RequestProduct from "../components/ProductList/RequestProduct.vue";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/product-list"
    },
    {
        path: "/:id",
        redirect: "/not-found"
    },
    {
        path: "/login",
        name: 'Login',
        component: Login
    },
    {
        path: "/product-list",
        component: ProductListTypes
    },
    {
        path: "/product-list/:id",
        redirect: 'not-found',
    },
    {
        path: "/product-list/apple/:id",
        name: "ProductList",
        component: ProductListProducts,
        beforeEnter: (to: any, from, next) => {
            const allTypes = [
                'iphone',
                'macbook',
                'ipad',
                'mac-mini',
                'mac-studio',
                'accessories'
            ]
            if (allTypes.includes(to.params.id)) {
                next()
            }
            next('/not-found')
        }
    },
    {
      path: '/request-product',
      component: RequestProduct
    },
    {
      path: "/cart",
      name: 'Card',
      component: Cart
    },
    {
        path: "/add-new-product",
        name: 'AddNewProduct',
        component: AddNewProduct
    },
    {
        path: "/not-found",
        name: 'notFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
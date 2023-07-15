import { createWebHistory, createRouter, RouteRecordRaw, RouteLocationNormalized} from "vue-router"
import ProductList from "../Pages/ProductList.vue"
import Login from "../Pages/Login.vue"
import AddNewProduct from "../Pages/AddNewProduct.vue"
import NotFound from "../Pages/NotFound.vue";
import Cart from "../Pages/Cart.vue";

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
        redirect: '/product-list/apple/iphone'
    },
    {
        path: "/product-list/:id",
        redirect: 'not-found'
    },
    {
        path: "/product-list/apple/:id",
        name: "ProductList",
        component: ProductList,
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
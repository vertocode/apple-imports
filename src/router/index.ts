import { createWebHistory, createRouter, RouteRecordRaw} from "vue-router"
import Login from "../Pages/Login.vue"
import AddNewProduct from "../Pages/AddNewProduct.vue"
import NotFound from "../Pages/NotFound.vue";
import Cart from "../Pages/Cart.vue";
import ProductListProducts from "../components/ProductList/ProductListProducts.vue";
import ProductListTypes from "../components/ProductList/ProductListTypes.vue";
import Requests from '../Pages/Requests.vue'
import RequestProduct from '../Pages/RequestProduct.vue'
import ProductDetails from "../Pages/ProductDetails.vue";

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
        path: "/product-list/apple/:category",
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
            if (allTypes.includes(to.params.category)) {
                next()
            }
            next('/not-found')
        }
    },
    {
        path: "/product-list/apple/:category/:productId",
        name: "ProductDetails",
        component: ProductDetails
    },
    {
        path: '/product-list/request-product',
        component: RequestProduct
    },
    {
      path: '/requests',
      component: Requests
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
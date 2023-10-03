]<template>
  <div class="product-list" v-if="state.selectedProductListType">
    <sub-navbar :selected-type="state.selectedProductType" :items="subNavbarItems" @select-product-type="setProductSelected"/>
    <main>
      <loading v-if="state.isLoading" :is-loading="true"></loading>
      <div v-else>
        <h1 class="mt-3">{{ subNavbarItems.filter(item => item.type === state.selectedProductType)[0].label }} Products: </h1>
        <div class="content-filters mt-3">
          <div class="center d-flex gap-3 align-items-end justify-content-center">
            <base-text-field
                icon="fa fa-search"
                @input-value="state.searchValue = $event"
            />
            <base-button
                variant="primary"
                action="Search"
                @click="search"
            />
          </div>
        </div>
        <div class="all-products" v-if="productListStore.products.length">
          <div class="product-item" v-for="(product, index) in productListStore.products" :key="index">
            <product-card
                :key="product"
                :index-product="index"
                :value="product.value"
                :name="product.name"
                :description="product.description"
                :src-img="product.srcImg"
                :is-added-cart="isAddedInTheCart(product)"
                :specifications="product.specifications"
            />
          </div>
        </div>
        <div v-else>
          <none-products />
        </div>
      </div>
    </main>
    <footer class="m-auto" v-if="productListStore.products.length > 20">
      <pagination />
    </footer>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import NoneProducts from './NoneProducts.vue'
import Loading from '../Loading/Loading.vue'
import Pagination from './Pagination.vue'
import {Products} from '../../services/product/ProductList'
import {computed, onMounted, reactive, watch} from "vue";
import BaseTextField from "../Input/BaseTextField.vue";
import BaseButton from "../Buttons/BaseButton.vue";
import SubNavbar from "../SubNavbar.vue";
import {useRoute, useRouter} from "vue-router";
import {useProductListStore} from "../../store/useProductListStore";
import {useCartStore} from "../../store/useCartStore";

const router = useRouter()
const productListStore = useProductListStore()
const cartStore = useCartStore()
const product = new Products()

const state = reactive({
  isLoading: true,
  searchValue: '',
  selectedProductListType: '',
  selectedProductType: ''
})

const subNavbarItems = computed(() => {
  return [
    { label: 'iPhone', type: 'iphone' },
    { label: 'MacBook', type: 'macbook' },
    { label: 'iPad', type: 'ipad' },
    { label: 'Mac Mini', type: 'mac-mini' },
    { label: 'Mac Studio', type: 'mac-studio' },
    { label: 'Accessories', type: 'accessories' }
  ]
})

watch(() => state.selectedProductType, async () => {
  state.isLoading = true
  const allProducts = await product.getProductByType(state.selectedProductType)
  productListStore.products = allProducts
      .filter(product => {
        if (product.type === state.selectedProductType) {
          return product
        }
        return null
      }).filter(p => p)
  state.isLoading = false
})

const search = () => {
  const { products } = product
  const { searchValue } = state
  productListStore.products = products.filter(product => {
    if (product.name.toLowerCase().includes(searchValue.toLowerCase()) && product.type === state.selectedProductType) {
      return product
    }
  })
}

const isAddedInTheCart = (product) => {
  return cartStore.cart.map(product => product.name).includes(product.name)
}

const setProductSelected = (type) => {
  router.push(type)
  state.selectedProductType = type
}

onMounted(async () => {
  const route = useRoute()

  if (route.params.id) {
    state.selectedProductListType = route.path
    state.selectedProductType = route.params.id || 'iphone'
    productListStore.products = await product.getProductByType(state.selectedProductType)
  } else {
    // Force wrong route if unexpect behavior happens.
    window.replace.path = 'not-found'
  }

  state.isLoading = false
})
</script>

<style lang="scss">
.product-list {
  main {
    width: 90%;
    margin: auto;
  }
  .content-filters {
    @media only screen and (min-width: 800px) {
      display: flex;
      justify-content: center;
    }
  }

  .all-products {
    display: grid;
    gap: 1rem;
    @media (min-width: 570px) {
      grid-template-columns: repeat(auto-fill, minmax(520px, 2fr));
    }
    grid-template-columns: repeat(auto-fill, minmax(320px, 2fr));
  }
  .add-new-product {
    &__enabled {
    }
    &__disabled {
    }
  }
  #image-append {
    img {
      width: 100px;
    }
  }
}
</style>
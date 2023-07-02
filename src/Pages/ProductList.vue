<template>
  <div class="product-list">
    <sub-navbar :selected-type="state.selectedTypeProduct" :items="subNavbarItems" @select-product-type="setProductSelected"/>
      <main>
        <loading v-if="state.isLoading" :is-loading="true"></loading>
        <div v-else>
          <h1 class="mt-3">All Apple Products: </h1>
          <div class="content-filters mt-3">
            <div class="center d-flex gap-3 align-items-end">
                <base-text-field
                    icon="search-icon"
                    @input-value="state.searchValue = $event"
                />
                <base-button
                    size="small"
                    action="Search"
                    @click="search"
                />
            </div>
          </div>
            <div class="all-products" v-if="store.state.products.length">
                <div class="product-item" v-for="(product, index) in store.state.products" :key="index">
                    <product-card
                        :key="product"
                        :index-product="index"
                        :value="product.value"
                        :name="product.name"
                        :description="product.description"
                        :src-img="product.srcImg"
                        :specifications="product.specifications"
                    />
                </div>
            </div>
            <div v-else>
                <none-products />
            </div>
        </div>
      </main>
      <footer class="m-auto">
          <pagination />
      </footer>
  </div>
  <add-new-product v-if="store.state.isAdmin"/>
</template>

<script setup>
import AddNewProduct from './AddNewProduct.vue'
import ProductCard from '../components/ProductList/ProductCard.vue'
import NoneProducts from '../components/ProductList/NoneProducts.vue'
import MultiFilter from '../components/Input/MultiFilter.vue'
import Loading from '../components/Loading/Loading.vue'
import Pagination from '../components/ProductList/Pagination.vue'

import { useStore } from 'vuex'
import { Products } from "../services/product/usecases/product-list";
import {computed, onBeforeMount, reactive, watch} from "vue";
import BaseTextField from "../components/Input/BaseTextField.vue";
import BaseButton from "../components/Buttons/BaseButton.vue";
import SubNavbar from "../components/SubNavbar.vue";

const store = useStore()
const product = new Products()

const filters = [
  {
    value: 'macbook',
    label: 'Macbook'
  },
  {
    value: 'iphone',
    label: 'IPhone'
  },
  {
    value: 'mac-mini',
    label: 'Mac Mini'
  },
  {
    value: 'mac-studio',
    label: 'Mac Studio'
  }
]
const state = reactive({
  isLoading: true,
  searchValue: '',
  selectedTypeProduct: ''
})

const subNavbarItems = computed(() => {
  return [
    { label:'Iphone', type: 'iphone' },
    { label:'Macbook', type: 'macbook' },
    { label:'Ipad', type: 'ipad' },
    { label:'Mac Mini', type: 'mac-mini' },
    { label:'Mac Studio', type: 'mac-studio' }
  ]
})

watch(() => state.selectedTypeProduct, async () => {
  const allProducts = await product.getAllProducts()
  store.state.products = allProducts
      .filter(product => {
        if (product.type === state.selectedTypeProduct) {
          return product
        }
        return null
      }).filter(p => p)
})

const search = () => {
  const { products } = product
  const { searchValue } = state
  const filteredProducts = products.filter(product => {
    if (product.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return product
    }
  })
  store.commit('setAllProducts', filteredProducts)
}

const setProductSelected = (type) => {
  state.selectedTypeProduct = type
}

onBeforeMount(async () => {
  const allProducts = await product.getAllProducts()
  store.commit('setAllProducts', allProducts)
  state.selectedTypeProduct = 'iphone'
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
    @media only screen and (max-width: 600px) {
      grid-template-columns: 100%;
    }
    @media only screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 50%);
    }
    @media only screen and (min-width: 1000px) {
      grid-template-columns: repeat(3, 33%);
    }
    @media only screen and (min-width: 1750px) {
      grid-template-columns: repeat(4, 25%);
    }
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
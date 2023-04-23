<template>
  <div class="product-list">
    <loading v-if="state.isLoading" :is-loading="true"></loading>
    <div v-else>
      <h1 class="mt-3">All products: </h1>
      <multi-filter
          :set-is-loading="setIsLoading"
          :filters="filters"
      ></multi-filter>
      <div class="all-products" v-if="store.state.products.length">
        <div class="product-item" v-for="(product, index) in store.state.products" :key="index">
          <product-card
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
        <none-products></none-products>
      </div>
    </div>
  </div>
  <add-new-product v-if="store.state.isAdmin"/>
</template>

<script setup>
import AddNewProduct from './AddNewProduct.vue'
import ProductCard from '../components/ProductList/ProductCard.vue'
import NoneProducts from '../components/ProductList/NoneProducts.vue'
import MultiFilter from '../components/Input/MultiFilter.vue'
import Loading from '../components/Loading/Loading.vue'

import { useStore } from 'vuex'
import { Products } from "../services/product/usecases/product-list";
import { onBeforeMount, reactive } from "vue";

const store = useStore()

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
  isLoading: true
})

const setIsLoading = (param) => {
  console.log('entrou')
  console.log(param)
}

onBeforeMount(async () => {
  const product = new Products()
  const allProducts = await product.getAllProducts()
  store.commit('setAllProducts', allProducts)
  state.isLoading = false
})
</script>

<style lang="scss">
.product-list {
  margin: auto;
  width: 90%;
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
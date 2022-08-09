<template>
  <div class="product-list">
    <h1>All products: </h1>
    <div class="all-products">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <product-card
          :index-product="index"
          :value="product.value"
          :name="product.name"
          :src-img="product.srcImg"
          :specifications="product.specifications"
        />
      </div>
    </div>
  </div>
  <add-new-product v-if="store.state.isAdmin"/>
</template>

<script setup>
import AddNewProduct from './AddNewProduct.vue'
import ProductCard from './ProductCard.vue'

import { useStore } from 'vuex'

const store = useStore()
const products = store.state.products
</script>

<style lang="scss">
.product-list {
  margin: auto;
  width: 90%;
  .all-products {
    display: grid;
    @media only screen and (max-width: 600px) {
      grid-template-columns: 100%;
    }
    @media only screen and (min-width: 600px) {
      grid-template-columns: 50% 50%;
    }
    @media only screen and (min-width: 1000px) {
      grid-template-columns: 33% 33% 33%;
    }
    @media only screen and (min-width: 1750px) {
      grid-template-columns: 25% 25% 25% 25%;
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
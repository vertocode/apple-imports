<template>
  <div class="product-list">
    <h1 class="mt-3">All products: </h1>
    <div class="all-products">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <product-card
          :id="index === products.length -1 ? 'last-item' : ''"
          :index-product="index"
          :value="product.value"
          :name="product.name"
          :description="product.description"
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
import ProductCard from '../components/ProductList/ProductCard.vue'

import { useStore } from 'vuex'

const store = useStore()
const products = store.state.products
</script>

<style lang="scss">
.product-list {
  margin: auto;
  width: 100%;
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
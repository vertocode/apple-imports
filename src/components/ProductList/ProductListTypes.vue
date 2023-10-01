<template>
  <div>
    <Loading :is-loading="true" v-if="isLoading" />
    <div v-for="(listType, index) in store.state.productListTypes" :key="index" v-if="store.state.productListTypes.length">
      <product-list-type :list-type="listType"></product-list-type>
    </div>
    <NoProductListTypes v-else/>
  </div>
</template>

<script setup lang="ts">
import ProductListType from './ProductListType.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import Loading from '../Loading/Loading.vue'
import { ProductTypes } from '../../services/product/ProductTypes'
import NoProductListTypes from './NoProductListTypes.vue'

const store = useStore()
const isLoading = ref(true)

onMounted(async () => {
  const productTypes = new ProductTypes()
  await productTypes.getProductListTypes(store)
  isLoading.value = false
  console.log(isLoading.value)
})
</script>
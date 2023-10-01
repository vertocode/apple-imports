<template>
  <div>
    <Loading v-if="isLoading" />
    <div v-for="(listType, index) in store.state.productListTypes" :key="index" v-else-if="store.state.productListTypes.length">
      <product-list-type :list-type="listType"></product-list-type>
    </div>
    <NoProductListTypes />
  </div>
</template>

<script setup lang="ts">
import ProductListType from './ProductListType.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import Loading from '../Loading/Loading.vue'
import { getProductListTypes } from '../../services/product/usecases/product-types'
import NoProductListTypes from './NoProductListTypes.vue'

const store = useStore()
const isLoading = ref(true)

onMounted(async () => {
  await getProductListTypes(store)
  isLoading.value = false
})
</script>
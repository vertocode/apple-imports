<template>
  <div>
    <Loading :is-loading="true" v-if="isLoading" />
    <div v-for="(listType, index) in productListStore.productListTypes" :key="index" v-if="productListStore.productListTypes.length">
      <product-list-type :list-type="listType"></product-list-type>
    </div>
    <NoProductListTypes v-else/>
  </div>
</template>

<script setup lang="ts">
import ProductListType from './ProductListType.vue'
import { onMounted, ref } from 'vue'
import Loading from '../Loading/Loading.vue'
import { ProductTypes } from '../../services/product/ProductTypes'
import NoProductListTypes from './NoProductListTypes.vue'
import { useProductListStore } from '../../store/useProductListStore'

const productListStore = useProductListStore()
const isLoading = ref(true)

onMounted(async () => {
	const productTypes = new ProductTypes()
	productListStore.productListTypes = await productTypes.getProductListTypes()
	isLoading.value = false
})
</script>
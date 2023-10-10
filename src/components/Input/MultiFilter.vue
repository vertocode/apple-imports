<template>
  <div class="multi-filter mt-4">
    <loading v-if="state.isLoading" :is-loading="true"></loading>
    <div
        class="form-check"
        v-for="(filter, index) in filters"
        :key="index"
    >
      <input
          aria-selected="true"
          class="form-check-input"
          type="checkbox"
          :value="filter.value"
          :checked="isSelected"
          v-model="state.selectedFilters"
          @change="applyFilters"
          :id="`input-`+index"
      >
      <label class="form-check-label" :for="`input-`+index">
        {{ filter.label }}
      </label>
    </div>
  </div>
</template>

<script setup>

import { reactive } from 'vue'
import { Products } from '../../services/product/ProductList'
import Loading from '../../components/Loading/Loading.vue'
import { useProductListStore } from '../../store/useProductListStore'

const productListStore = useProductListStore()
const props = defineProps({
	filters: {
		type: Array,
		required: true
	}
})

const isSelected = (index) => {
	return props.filters[index].value
}

const state = reactive({
	selectedFilters: props.filters.map(filter => filter.value),
	isLoading: false
})

const applyFilters = async () => {
	state.isLoading = true
	const products = new Products()
	const allProducts = await products.getAllProducts()
	productListStore.products = allProducts
		.filter(product => {
			if (state.selectedFilters.some(filter => filter === product?.type)) {
				return product
			}
			return null
		})
		.filter(p => p)
	state.isLoading = false
}
</script>

<style scoped lang="scss">
.multi-filter {
  text-align: left;
  gap: 2em;
  @media only screen and (min-width: 600px) {
    display: flex;
  }
}
</style>
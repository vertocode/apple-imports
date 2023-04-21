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

import { reactive } from "vue";
import { useStore } from "vuex";
import { Products } from "../../modules/product/usecases/product-list";
import Loading from '../../components/Loading/Loading.vue'

const store = useStore()
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
const emits = defineEmits(['setIsLoading'])

const applyFilters = async () => {
  state.isLoading = true
  const products = new Products()
  const allProducts = await products.getAllProducts()
  const filteredProducts = allProducts
    .filter(product => {
      if (state.selectedFilters.some(filter => filter === product?.type)) {
        return product
      }
      return null
    })
    .filter(p => p)
  store.commit('setAllProducts', filteredProducts)
  state.isLoading = false
}
</script>

<style scoped>
.multi-filter {
  display: flex;
  gap: 2em;
}
</style>
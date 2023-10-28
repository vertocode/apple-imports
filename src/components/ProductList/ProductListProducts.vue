]<template>
  <div class="product-list" v-if="state.selectedProductListType">
    <sub-navbar :selected-type="state.selectedProductType" :items="subNavbarItems" @select-product-type="setProductSelected"/>
    <main>
      <loading v-if="state.isLoading" :is-loading="true"></loading>
      <div v-else>
        <div class="title-content">
          <div class="back-button-div">
            <BackButton />
          </div>
          <h1 class="mt-3">{{ subNavbarItems.filter(item => item.type === state.selectedProductType)[0].label }} Products: </h1>
        </div>
        <div class="content-filters mt-3">
          <div class="center d-flex gap-3 align-items-end justify-content-center">
            <BaseTextField
                icon="fa fa-search"
                @input-value="state.searchValue = $event"
            />
            <BaseButton
                left-icon="fa fa-arrow-down"
                variant="primary"
                action="Search"
                @click="search"
            />
          </div>
        </div>
        <div class="all-products" v-if="productListStore.products.length">
          <div class="product-item" v-for="(product, index) in productListStore.products" :key="index">
            <product-card
                :product="product"
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
import { Products } from '../../services/product/ProductList'
import { computed, onMounted, reactive, watch } from 'vue'
import BaseTextField from '../Input/BaseTextField.vue'
import BaseButton from '../Buttons/BaseButton.vue'
import SubNavbar from '../SubNavbar.vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductListStore } from '../../store/useProductListStore'
import { useCartStore } from '../../store/useCartStore'
import BackButton from '../Buttons/BackButton.vue'

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
		{ label: 'iPhone', type: 'iphone', leftIcon: 'fa fa-mobile' },
		{ label: 'MacBook', type: 'macbook', leftIcon: 'fa fa-laptop' },
		{ label: 'iPad', type: 'ipad', leftIcon: 'fa fa-tablet' },
		{ label: 'Mac Mini', type: 'mac-mini', leftIcon: 'fa fa-square' },
		{ label: 'IMac', type: 'imac', leftIcon: 'fa fa-desktop' },
		{ label: 'Mac Studio', type: 'mac-studio', leftIcon: 'fa fa-window-maximize' },
		{ label: 'Accessories', type: 'accessories', leftIcon: 'fa fa-plug' }
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

	if (route.params.category) {
		state.selectedProductListType = route.path
		state.selectedProductType = route.params.category || 'iphone'
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
  .title-content {
    display: flex;
    justify-content: center;
    gap: 2em;
    flex-wrap: wrap;
    align-items: center;
    .back-button-div {
      margin-top: 1em;
      height: 20px;
    }
    h1 {
      width: 80%;
    }
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
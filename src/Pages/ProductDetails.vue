<template>
  <div class="main-content">
    <Loading v-if="!product?.value"/>
    <div v-else>
      <BackButton :route="$route.path.replace(`/${product.id}`, '')" class="mt-4" />
      <div class="product-image-content mt-3">
        <h1 class="font-monospace">{{ product.name }} <span>#{{ product.id }}</span></h1>
        <Slider
            hidde-control-buttons
            :is-mini="product.name.toLowerCase().includes('mini')"
            :selectedImageByColor="state.imageColor"
            :images="allImages"
        />
      </div>

      <div class="font-monospace">
        <h4 class="text-muted my-3">{{ Number(totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</h4>
      </div>
      <div class="form">
        <div class="number-products">
          <span>Number of Items:</span>
          <BaseAutocomplete @value="state.selectedNumberOfItems = $event" :options="optionsNumberOfItems"></BaseAutocomplete>
          <BaseTextField placeholder="How many products do you need?" v-if="state.selectedNumberOfItems === '+'"></BaseTextField>
        </div>
      </div>

      <div class="action-buttons">
        <BaseButton size="large" left-icon="fa fa-cart-plus" :disabled="!state.selectedNumberOfItems" @click="addToCart" action="Add to Cart" variant="primary"/>
        <BaseButton size="large" left-icon="fa fa-money" :disabled="!state.selectedNumberOfItems" @click="buy" action="Buy" variant="success"/>
      </div>
      <div class="product-content">
        <div class="product-details">
          <ol class="list-group px-3 py-2">
            <li
                class="text-capitalize font-monospace"
                v-for="(textDescription, index) in product.description?.split('\n')"
                :key="index"
            >
              <br>
              {{ textDescription }}
            </li>
            <li class="specifications-content">
              <div class="d-flex flex-wrap gap-3 specifications-content-items">
                <div
                    class="item-specification"
                    v-for="(specification, indexSpecification) in product.specifications"
                    :key="indexSpecification"
                >
                  <div class="d-flex justify-content-between">
                    <div class="fw-bold mx-2 my-2">{{ specification.title }}:</div>
                    <span style="height: max-content" class="badge bg-primary rounded-pill mt-2" title="Options">{{ specification.items.length ?? 0 }}</span>
                  </div>
                  <ul>
                    <li v-for="(item, index) in specification.items" :key="index" @click="calculateValue(item, specification.title)">
                      <input
                          class="float-start mx-3 mt-1"
                          type="radio"
                          :name="`${indexSpecification}-${product.indexProduct}`"
                          :id="`input-${indexSpecification}-${product.indexProduct}-${index}`"
                          v-if="index === 0"
                          checked
                      />
                      <input
                          class="float-start mx-3 mt-1"
                          type="radio"
                          :name="`${indexSpecification}-${product.indexProduct}`"
                          :id="`input-${indexSpecification}-${product.indexProduct}-${index}`"
                          v-else
                      />
                      <label :for="`input-${indexSpecification}-${product.indexProduct}-${index}`">
                        <span class="specification-text" @click="markInput(indexSpecification, product.indexProduct, index)">{{ item.name }}</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import Slider from '../components/Slider/Slider.vue'
import { useProductListStore } from '../store/useProductListStore'
import { useRoute, useRouter } from 'vue-router'
import BackButton from '../components/Buttons/BackButton.vue'
import Loading from '../components/Loading/Loading.vue'
import BaseButton from '../components/Buttons/BaseButton.vue'
import { useCartStore } from '../store/useCartStore'
import BaseAutocomplete from '../components/Input/BaseAutocomplete.vue'
import BaseTextField from '../components/Input/BaseTextField.vue'

const productListStore = useProductListStore()
const cartStore = useCartStore()
const route = useRoute()
const router = useRouter()
const product = computed(() => {
	return productListStore.products.filter((product) => Number(product.id) === Number(route.params.productId)).at(0)
})

const itemsMarked = ref([])
const currentProduct = ref({})
const totalValue = ref(0)
const state = reactive({
	imageColor: null,
	selectedNumberOfItems: 0
})

const optionsNumberOfItems = [
	{
		value: 1,
		label: '1'
	},
	{
		value: 2,
		label: '2'
	},
	{
		value: 3,
		label: '3'
	},
	{
		value: 4,
		label: '4'
	},
	{
		value: 5,
		label: '5'
	},
	{
		value: '+',
		label: 'More than 5'
	}
]

const allImages = computed(() => {
	const { items = [] } = product.value.specifications.find((specification) => specification.title === 'Color') || {}
	const colorImages = items?.map((item) => item?.srcImg).filter((item) => item) || []
	return [...colorImages, ...(typeof product.value.srcImg === 'string' ? [product.value.srcImg] : product.value.srcImg)]
})

const addToCart = () => {
	for (const times in new Array(state.selectedNumberOfItems).fill('time')) {
		cartStore.cart.push(currentProduct.value)
	}
	router.push('/cart')
}

const buy = () => {

}

const calculateValue = (specification, title) => {
	const { name, value, srcImg } = specification
	const currentItem = itemsMarked.value.filter((item) => item.title === title)

	const indexItem = itemsMarked.value.indexOf(currentItem[0])

	itemsMarked.value[indexItem] = {
		title,
		name,
		value: value || 0,
	}

  currentProduct.value = {
    ...currentProduct.value,
    specifications: itemsMarked.value,
    value: totalValue.value
  }

	totalValue.value = product.value.value
	for (const item of itemsMarked.value) {
		totalValue.value += item.value || 0
	}

	if (title === 'Color') {
		state.imageColor = srcImg || null
	}
}

const markInput = (indexSpecification, indexProduct, index) => {
	const inputId = `input-${indexSpecification}-${indexProduct}-${index}`
	const inputElement = document.getElementById(inputId)

	if (inputElement) {
		inputElement.checked = true
	}
}


onMounted(async () => {
	const productListStore = useProductListStore()
	await productListStore.getProductByType(route.params.category)

	state.imageColor = allImages.value[0]
	totalValue.value = product.value.value
	itemsMarked.value = product.value.specifications.map(specification => ({ title: specification.title, ...specification.items[0] }))
  currentProduct.value = {
    ...product.value,
    specifications: itemsMarked.value
  }
})

onBeforeUnmount(() => {
	productListStore.products = []
})
</script>

<style scoped lang="scss">
.main-content {
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  border-radius: 5px;

  .action-buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2em;
    justify-content: center;
    gap: 3em
  }

  .form {
    display: flex;
    justify-content: center;
    .number-products {
      min-width: 330px;
    }
  }

  .list-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;

    li {
      list-style-type: none;
    }

    .specifications-content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;

      .specifications-content-items {
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        flex-basis: 80%;

        .item-specification {
          flex: 1;
          margin-bottom: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          max-width: 500px;

          .fw-bold {
            font-size: 1.2rem;
            color: #333;
          }

          ul {
            list-style-type: none;
            padding: 0;

            li {
              list-style-type: none;
              display: flex;
              align-items: center;
              margin-bottom: 10px;

              input[type='radio'] {
                cursor: pointer;
                margin-right: 10px;
              }

              .specification-text {
                font-size: 1rem;
                color: #555;
                overflow: hidden;
                max-width: 150px;
                cursor: pointer;
                position: relative;

                &:hover {
                  &:after {
                    content: attr(title);
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.9);
                    color: #fff;
                    padding: 5px;
                    border-radius: 4px;
                    top: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    white-space: nowrap;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                    z-index: 999;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

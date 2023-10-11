<template>
  <div class="product-card px-2">
    <div class="card-item">
      <h3 class="text-primary">
        {{ name }}
      </h3>
      <div class="image-content">
        <slider :selectedImageByColor="state.imageColor" :images="allImages"/>
      </div>
      <h4 class="mt-4 text-muted my-3">Starting from {{ Number(totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</h4>
      <router-link :to="`${$route.params.category}/${product.id}`">
        <BaseButton
            size="large"
            action="See More Details"
            right-icon="fa fa-envelope-open"
            class="btn btn-sm"
        >
          See more details
        </BaseButton>
      </router-link>

      <p class="mt-3" v-if="!isLogged">You need do the
        <span @click="$router.push('/login')" class="text-primary" style="cursor: pointer">login</span>
        to enable this button</p>
      <br v-else>
      <div v-if="isAddedCart" class="alert-success">
        <p class="text-green">
          You have {{ numberOfItems }} {{ name }}
          <span v-if="numberOfItems === 1">product</span>
          <span v-else>products</span>
          added in the Cart!
        </p>
        <span @click="$router.push('/cart')" class="link-info" style="cursor:pointer;">
          Click here to redirect to your cart.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>

import { computed, onMounted, reactive, ref } from 'vue'
import Slider from '../Slider/Slider.vue'
import { useCartStore } from '../../store/useCartStore'
import { useUserStore } from '../../store/useUserStore'
import BaseButton from '../Buttons/BaseButton.vue'

const props = defineProps({
	product: Object
})

const {
	value,
	indexProduct,
	description,
	name,
	isAddedCart,
	srcImg,
	specifications
} = props.product

let itemsMarked = []
let totalValue = ref(value)

const cartStore = useCartStore()
const userStore = useUserStore()
const state = reactive({
	isActive: true,
	isAddedCart: false,
	imageColor: null,
	showModal: false
})

const numberOfItems = computed(() => {
	return cartStore.cart.filter(product => product.name === name).length
})

const allImages = computed(() => {
	const { items = [] } = specifications.filter(specification => specification.title === 'Color')[0] || {}
	const colorImages = items?.map(item => item?.srcImg).filter(item => item) || []
	return [
		...colorImages,
		...(typeof srcImg === 'string' ? [srcImg] : srcImg)
	]
})

const isLogged = userStore.userData?.name
const tooltipButtons = !isLogged ? 'You need do the login to use this button' : 'Click to action'

const addItemCart = () => {
	console.log(cartStore)
	cartStore.cart.push({
		srcImg,
		name,
		value: itemsMarked.reduce(({ value: previousValue }, { value: currentValue }) => {
			return (previousValue || 0) + (currentValue || 0)
		}) + value,
		specifications: itemsMarked.map(item => {
			return {
				title: item.title,
				items: [
					{
						name: item.name
					}
				]
			}
		}),
		indexProduct
	})
}

onMounted(() => {
	specifications.forEach(specification => {
		totalValue.value += specification.items[0].value ?? 0
		itemsMarked.push({
			title: specification.title,
			name: specification.items[0].name,
			value: specification.items[0].value || 0
		})
	})
})
</script>

<style lang="scss">
.product-card {
  .dropdown-btn {
    position: relative;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  .card-item {
    background-color: #fff;
    margin: 20px auto;
    max-width: 700px;
    min-width: 200px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
  }

  h4 {
    font-size: 1.2rem;
    color: #555;
  }

  .slider-container {
    height: 15rem;
    margin-top: 20px;
  }

  .list-group {
    margin-top: 20px;

    .item-specification {
      border-bottom: 1px solid #ddd;
      padding: 20px;
      margin-top: 20px;

      .fw-bold {
        font-size: 1.2rem;
        color: #333;
      }

      ul {
        list-style-type: none;
        padding: 0;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          input[type="radio"] {
            margin-right: 10px;
          }

          .specification-text {
            font-size: 1rem;
            color: #555;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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

  li {
    list-style-type: none;
  }

  #action-buttons {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-top: 20px;

    .text-primary {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .image-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .transition-image {
      height: 15em;
      width: 100%;
    }
  }

  .alert-success {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;

    .text-green {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .link-info {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>
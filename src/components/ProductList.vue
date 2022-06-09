<template>
  <div class="product-list">
    <h1>All apple products: </h1>
    <div class="all-products">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <product-card
          :value="product.value"
          :name="product.name"
          :src-img="product.srcImg"
          :processors="product.processors"
          :rams="product.rams"
          :stores="product.stores"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'App',
  data() {
    return {
      products: [
        {
          value: 7500,
          name: 'MacBook Air',
          srcImg: './src/assets/products/macbook-air-m1.jpg',
          processors: [
            {
              name: 'M1 chip',
              value: 500
            },
            {
              name: 'M2 chip',
              value: 4000
            }
          ],
          rams: [
            {
              name: '8',
              value: 500
            },
            {
              name: '16',
              value: 1500
            },
            {
              name: '32',
              value: 3000
            },
            {
              name: '64',
              value: 5000
            }
          ],
          stores: [
            {
              name:'256 GB',
              value: 500
            },
            {
              name:'512 GB',
              value: 1000
            },
            {
              name:'1 TB',
              value: 1500
            },
            {
              name: '2 TB',
              value: 2000
            }
          ]
        },
        {
          name: 'Mac Mini',
          value: 6500,
          srcImg: './src/assets/products/mac-mini.png',
          processors: [
            {
              name: 'M1 chip',
              value: 500
            },
          ],
          rams: [
            {
              name: '8',
              value: 400
            },
            {
              name: '16',
              value: 1200
            },
            {
              name: '32',
              value: 2200
            },
            {
              name: '64',
              value: 3500
            }
          ],
          stores: [
            {
              name:'256 GB',
              value: 400
            },
            {
              name:'512 GB',
              value: 800
            },
            {
              name:'1 TB',
              value: 1200
            },
            {
              name: '2 TB',
              value: 1500
            }
          ]
        },
        {
          value: 6000,
          name: 'Iphone 13',
          srcImg: './src/assets/products/iphone-13.jpeg',
          stores: [
            {
              name: '128 GB',
              value: 500
            },
            {
              name: '256 GB',
              value: 1200
            },
            {
              name: '512 GB',
              value: 2000
            },
            {
              name: '1 TB',
              value: 2500
            }
          ]
        }
      ]
    }
  },
  components: {
    ProductCard
  }
}
</script>

<style lang="scss">
.product-list {
  margin: auto;
  width: 90%;
  .all-products {
    display: grid;
    @media only screen and (max-width: 600px) {
      grid-template-columns: auto;
    }
    @media only screen and (min-width: 600px) {
      grid-template-columns: auto auto;
    }
    @media only screen and (min-width: 1000px) {
      grid-template-columns: auto auto auto;
    }
    @media only screen and (min-width: 1750px) {
      grid-template-columns: auto auto auto auto;
    }
  }
}
</style>
<template>
  <div class="product-list">
    <h1>Lista de produtos Apple: </h1>
    <div class="all-products">
      <div class="product-item" v-for="(product, index) in products" :key="index">
        <product-card
          :index-product="index"
          :value="product.value"
          :name="product.name"
          :src-img="product.srcImg"
          :specifications="product.specifications"
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
          srcImg: 'macbook-air-m1.jpg',
          specifications: [
            {
              title: 'Processador',
              items: [
                {
                  name: 'M1 chip'
                },
                {
                  name: 'M2 chip',
                  value: 4000
                }
              ]
            },
            {
              title: 'Memoria RAM',
              items: [
                {
                  name: '8 GB'
                },
                {
                  name: '16 GB',
                  value: 2000
                }
              ]
            },
            {
              title: 'Armazenamento',
              items: [
                {
                  name:'256 GB'
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
            }
          ]
        },
        {
          value: 4000,
          name: 'Iphone 13',
          srcImg: 'iphone-13.jpeg',
          specifications: [
            {
              title: 'Processador',
              items: [
                {
                  name: '2x 3.22 GHz Avalanche + 4x 1.82 GHz Blizzard',
                  value: 500
                }
              ]
            },
            {
              title: 'GPU',
              items: [
                {
                  name: 'Apple GPU (4‑core)'
                }
              ]
            },
            {
              title: 'Câmera',
              items: [
                {
                  name: '12 Mp'
                },
                {
                  name: '14 Mp',
                  value: 200
                },
                {
                  name: '16 Mp',
                  value: 400
                }
              ]
            },
            {
              title: 'Memoria RAM',
              items: [
                {
                  name: '4 GB'
                }
              ]
            },
            {
              title: 'Armazenamento',
              items: [
                {
                  name: '256 GB'
                },
                {
                  name: '512 GB',
                  value: 1000
                }
              ]
            }
          ]
        },
        {
          value: 6000,
          name: 'Mac Mini',
          srcImg: 'mac-mini.png',
          specifications: [
            {
              title: 'Processador',
              items: [
                {
                  name: 'M1 chip'
                },
                {
                  name: 'M2 chip',
                  value: 3500
                }
              ]
            },
            {
              title: 'Memoria RAM',
              items: [
                {
                  name: '8 GB'
                },
                {
                  name: '16 GB',
                  value: 1500
                }
              ]
            },
            {
              title: 'Armazenamento',
              items: [
                {
                  name:'256 GB'
                },
                {
                  name:'512 GB',
                  value: 200
                },
                {
                  name:'1 TB',
                  value: 800
                },
                {
                  name: '2 TB',
                  value: 1500
                }
              ]
            }
          ]
        },
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
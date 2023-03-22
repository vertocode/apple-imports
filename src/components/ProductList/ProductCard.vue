<template>
  <div class="product-card px-2">
    <div class="card-item">
      <h3 class="text-primary">
        {{ name }}
      </h3>
      <img
          v-if="srcImg"
          :src="srcImg"
          :alt="name"
      />
      <h4 class="mt-4 text-muted my-3">{{ Number(totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</h4>
      <h5>{{ description || '' }}</h5>
      <ol class="list-group px-3 py-2">
        <li class="justify-content-between align-items-start">
          <div class="ms-2 me-auto" v-for="(specification, indexSpecification) in specifications" :key="indexSpecification">
            <div class="item-specification" :style="{ 'border-bottom': indexSpecification === props.specifications.length - 1 ? 'none' : ''  }">
              <div class="d-flex justify-content-between">
                <div class="fw-bold mx-2 my-2">{{ specification.title }}:</div>
                <div>
                  <span class="badge bg-primary rounded-pill mt-2" title="Options">{{ specification.items.length ?? 0 }}</span>
                </div>
              </div>
              <ul>
                <li v-for="(item, index) in specification.items">
                  <input class="float-start mx-3 mt-1" type="radio" :name="`${indexSpecification}-${indexProduct}`" v-if="index === 0" checked @click="calculateValue(item, specification.title)">
                  <input class="float-start mx-3 mt-1" type="radio" :name="`${indexSpecification}-${indexProduct}`" v-else @click="calculateValue(item, specification.title)">
                  <span class="specification-text">{{ item.name }}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ol>
      <div id="action-buttons">
        <button :title="tooltipButtons" :disabled="!isLogged" class="btn btn-primary" @click="buyClick">Add to cart</button>
        <button :title="tooltipButtons" :disabled="!isLogged" class="btn btn-success" @click="buyClick">Buy directly</button>
      </div>
      <p class="mt-3" v-if="!isLogged">You need do the
        <span @click="$router.push('login')" class="text-primary" style="cursor: pointer">login</span>
        to enable these buttons</p>
      <br v-else>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  value: Number,
  indexProduct: Number,
  description: String,
  name: String,
  srcImg: String,
  specifications: Object
})

let itemsMarked = []
let totalValue = ref(props.value)


const store = useStore()

const isLogged = store.state.userData?.name
const tooltipButtons = !isLogged ? 'You need do the login to use this button' : 'Click to action'

const calculateValue = (specification, title) => {

  const { name, value } = specification
  totalValue.value = props.value || 0

  const currentItem = itemsMarked.filter(item => item.title === title)

  const indexItem = itemsMarked.indexOf(currentItem[0])

  itemsMarked[indexItem] = {
    title,
    name,
    value: value ?? 0
  }

  for (const item of itemsMarked) {
    totalValue.value += item.value || 0
  }
}

const buyClick = () => {
  const isNotLogged = !store.state.userData.name
  if (isNotLogged) {
    window.location.pathname = 'login'
  } else {
    alert('yet not develop')
  }
}

onMounted(() => {
  props.specifications.forEach(specification => {
    totalValue.value += specification.items[0].value ?? 0
    itemsMarked.push({
      title: specification.title,
      name: specification.items[0].name,
      value: specification.items[0].value
    })
  })
})
</script>

<style lang="scss">
.product-card {
  margin: 20px;
  .card-item {
    margin: 20px auto;
    max-width: 500px;
    min-width: 200px;
    padding: 10px;
    border-style: groove;
    border-radius: 30px;
    img {
      max-width: 80%;
      height: 100px;
    }
    ol {
      width: 95%;
      margin: auto;
    }
    li {
      list-style-type: none;
      text-align: start;
    }
    .item-specification {
      min-height: 140px;
      border-bottom: rgba(13, 110, 253, 0.69) solid 1px;
      margin-top: 4px;
      padding: 3px;
    }

    #action-buttons {
      margin: auto;
      display: grid;
      grid-template-columns: 0.8fr 1fr;
      gap: 1.5em;
      justify-content: space-between;
      width: 80%;
    }
  }
}
</style>
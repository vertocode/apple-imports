<template>
  <div class="product-card">
    <div class="card-item">
      <h3 class="text-primary">
        {{ name }}
      </h3>
      <img
          :src="srcImg"
          :alt="name"
      />
      <h4 class="mt-4 text-muted my-3">{{ Number(totalValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</h4>
      <ol class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Processador:</div>
            <ul>
              <li v-for="(processor, index) in processors">
                <input class="float-start mx-3 mt-1" type="radio" name="processor" v-if="index === 0" checked @click="calculateValue(processor, 'processor')">
                <input class="float-start mx-3 mt-1" type="radio" name="processor" v-else @click="calculateValue(processor, 'processor')">{{ processor.name }}</li>
            </ul>
          </div>
          <span class="badge bg-primary rounded-pill" title="Opções">{{ processors?.length ?? 0 }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Memória RAM:</div>
            <ul>
              <li v-for="(ram, index) in rams">
                <input class="float-start mx-3 mt-1" type="radio" name="ram" v-if="index === 0" checked @click="calculateValue(ram, 'ram')">
                <input class="float-start mx-3 mt-1" type="radio" name="ram" v-else @click="calculateValue(ram, 'ram')">{{ ram.name }} GB - RAM</li>
            </ul>
          </div>
          <span class="badge bg-primary rounded-pill" title="Opções">{{ rams?.length ?? 0 }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">Armazenamento:</div>
            <ul>
              <li v-for="(store, index) in stores">
                <input class="float-start mx-3 mt-1" type="radio" name="store" v-if="index === 0" checked @click="calculateValue(store, 'store')">
                <input class="float-start mx-3 mt-1" type="radio" name="store" v-else @click="calculateValue(store, 'store')">
                {{ store.name }} - SSD</li>
            </ul>
          </div>
          <span class="badge bg-primary rounded-pill" title="Opções">{{ stores?.length ?? 0 }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>

import { onMounted, ref} from "vue";

const props = defineProps({
  value: Number,
  name: String,
  srcImg: String,
  processors: Array,
  rams: Array,
  stores: Array
})

let processor = ref(0)
let ram = ref(0)
let store = ref(0)
let totalValue = ref(props.value)

const calculateValue = (item, type) => {
  totalValue.value = props.value
  switch (type) {
    case 'processor':
      processor.value = item.value
          break
    case 'ram':
      ram.value = item.value
          break
    case 'store':
      store.value = item.value
          break
  }

  totalValue.value += processor.value + ram.value + store.value
}

onMounted(() => {
  totalValue.value += props.processors[0].value
  totalValue.value += props.rams[0].value
  totalValue.value += props.stores[0].value
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
    li {
      list-style-type: none;
    }
  }
}
</style>
<template>
  <main class="mt-3">
    <div class="d-flex justify-content-evenly">
      <h1>Your Cart</h1>
      <BaseButton action="Add new Items" @click="$router.push('/product-list')"/>
    </div>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th>Product Name</th>
          <th>Value</th>
          <th>Specifications</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(product, index) in store.state.cart">
          <th>
            {{ product.name }}
            <img style="width: 40px; margin-left: 5px" :src="product.srcImg" :alt="product.name">
          </th>
          <th>{{ product.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</th>
          <th>
            <Tooltip>
              <template #hover>
                <button class="btn dropdown-toggle"></button>
              </template>
              <template #content>
                <ul>
                  <li v-for="(specification, indexSpecification) in product.specifications" :key="indexSpecification">
                    {{ specification.title }}
                    <ul>
                      <li v-for="(item, indexItems) in specification.items" :key="indexItems">
                        {{ item.name }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </template>
            </Tooltip>
          </th>
          <th><BaseButton action="Delete" variant="danger" @click="deleteItemCart(index)"/></th>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup>
import BaseButton from "../components/Buttons/BaseButton.vue"
import { useStore } from "vuex";
import { nextTick } from "vue";
import Tooltip from "../components/Tooltip/Tooltip.vue";

const store = useStore()

const deleteItemCart = async (index) => {
  store.commit('deleteItemCart', index)
  await nextTick()
}
console.log(store)

</script>
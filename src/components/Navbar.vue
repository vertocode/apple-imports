<template>
  <div class="content navbar">
    <router-link v-if="!store.state.userData.name" to="login" style="text-decoration: underline">
      <img title="login" src="https://cdn-icons-png.flaticon.com/512/9052/9052119.png" alt="login-icon">
    </router-link>
    <div v-else>
      <img :src="store.state.userData.picture" alt="img-profile" style="border-radius: 50%">
    </div>
    <ul class="list">
      <router-link :to="step.link" v-for="step in steps" :key="step.title" :style="{ 'text-decoration': route.path === step.link ? 'underline': 'none' }">
        <navbar-item
            :item-name="step.title"
        />
      </router-link>
    </ul>
    <div>
      <img src="https://i.imgur.com/x8JUHgC.png" alt="shopping-cart">
      <span class="badge bg-success rounded-pill mt-2" title="Options">0</span>
    </div>
  </div>
</template>

<script setup>
import NavbarItem from './Navbar/NavbarItem.vue'
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'


let activeStep = ref('login')
const store = useStore()
const route = useRoute()
const steps = [
  {
    link: '/product-list',
    title: 'Product list'
  },
  {
    link: '/add-new-product',
    title: 'Add a new product (Development)'
  },
]

watchEffect(() => console.log(route.path))
</script>

<style lang="scss">
.content {
  font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;;
  background-color: rgb(22,22,23);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  .list {
    display: flex;
    li {
      margin: 0 50px
    }
  }

  img {
    width: 70px;
    position: relative;
  }

  .badge {
    position: absolute;
    bottom: 5px;
    right: 20px;
  }

  a {
    text-decoration: none;
    font-size: 1.5em;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
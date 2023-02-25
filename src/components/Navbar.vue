<template>
  <div class="content navbar">
    <router-link v-if="!store.state.userData.name" to="login" style="text-decoration: underline">
      <img
          title="login"
          src="https://cdn-icons-png.flaticon.com/512/9052/9052119.png"
          alt="login-icon"
      >
    </router-link>
    <div v-else>
      <img
          @click="state.dropdownActivated = !state.dropdownActivated"
          :src="store.state.userData.picture"
          alt="img-profile"
          style="border-radius: 50%; cursor: pointer">
    </div>
    <div class="dropdown" v-if="state.dropdownActivated">
      <ul>
        <li>Profile</li>
        <li>Cart</li>
        <li>Requests</li>
        <li @click="logout">Logout</li>
      </ul>
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
import { reactive, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import router from "../router";

const state = reactive({
  dropdownActivated: false
})

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

const logout = () => {
  // Remove User data.
  store.commit('setUserLogged', {})
  localStorage.clear()

  // Close dropdown.
  state.dropdownActivated = false

  // Redirect to the login screen.
  router.push('login')
}

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
  .dropdown {
    padding-top: 0.6em;
    background-color: rgba(0, 0, 0, 0.48);
    color: white;
    position: absolute;
    top: 100px;
    height: max-content;
    width: 7em;
    ul {
      padding-inline-start: 0 !important;
      li {
        padding-top: 0.3em;
        cursor: pointer;
        list-style-type: none;
      }
      li:hover {
        background-color: #05cadc;
      }
    }
  }
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
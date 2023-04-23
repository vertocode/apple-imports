<template>
  <div id="app">
    <loading v-if="state.isLoading" :is-loading="true"></loading>
    <navbar/>
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { useStore } from "vuex";
import { Users } from "./services/users/user";
import { onMounted } from "vue";
import { reactive } from "vue";
import Loading from './components/Loading/Loading.vue'

const store = useStore()
const state = reactive({
  isLoading: store.state.isLoading
})
const users = new Users()
onMounted(async () => {
  const allUsers = await users.getAllUsers()
  state.isLoading = false
  store.commit('setAllUsers', allUsers)
})

</script>

<style>
body {
  background-color: #EBEBEB;
}
</style>
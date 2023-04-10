<template>
  <div id="app">
    <navbar/>
    <router-view />
  </div>
</template>

<script setup>
import ProductList from './Pages/ProductList.vue'
import Navbar from './components/Navbar.vue'

</script>

<style>
body {
  background-color: rgba(243, 233, 233, 0.2);
}
</style>
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
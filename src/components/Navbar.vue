<template>
  <div class="navbar bg-black text-white">
    <router-link to="product-list">
      <navbar-item
          item-name="Product list"
      />
    </router-link>
  </div>
</template>

<script setup>
import NavbarItem from './Navbar/NavbarItem.vue'
</script>

<style lang="scss">
.navbar {

}
</style>
<template>
  <div class="navbar bg-black text-white">
    <ul class="list">
      <router-link to="product-list">
        <navbar-item
            item-name="Product list"
        />
      </router-link>
      <router-link to="login">
        <navbar-item
            item-name="Login"
        />
      </router-link>
    </ul>
  </div>
</template>

<script setup>
import NavbarItem from './Navbar/NavbarItem.vue'
</script>

<style lang="scss">
.navbar {
  .list {
    display: flex;
    li {
      margin: 0 50px
    }
  }
}
</style>
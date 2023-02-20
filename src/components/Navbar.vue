<template>
  <div class="content navbar bg-black text-white">
    <router-link to="login">
      <img title="login" src="https://cdn-icons-png.flaticon.com/512/9052/9052119.png" alt="login-icon">
    </router-link>
    <ul class="list">
      <router-link to="product-list">
        <navbar-item
            item-name="Product list"
        />
      </router-link>
      <router-link to="add-new-product">
        <navbar-item
            item-name="Add a new product (Development)"
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
</script>

<style lang="scss">
.content {
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2em;
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
    right: 35px;
  }
}
</style>
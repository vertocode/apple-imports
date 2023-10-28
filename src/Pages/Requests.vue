<template>
  <div class="requests">
    <h1 class="title">Your Requests</h1>
    <div class="card">
      <h2>You don't have requests yet</h2>
      <shop-now-button />
    </div>
  </div>
</template>

<script setup lang="ts">
import ShopNowButton from '../components/Buttons/ShopNowButton.vue'
</script>

<style lang="scss">
.requests {
  margin: 1.5em;
  .title {
    text-align: left;
  }

  .card {
    margin: 2em auto;
    padding: 2em;
    background-color: white;
  }
}
</style>
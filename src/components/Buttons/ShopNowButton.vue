<template>
  <div class="shop-now-button">
    <BaseButton action="Shop Now" @click="$router.push('/product-list')" />
  </div>
</template>
<script setup lang="ts">
import BaseButton from './BaseButton.vue'
</script>

<style lang="scss">
.shop-now-button {
  display: flex;
  justify-content: center;
}
</style>
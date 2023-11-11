<template>
  <div class="shop-now-button">
    <BaseButton @click="$router.push('/product-list')">Shop Now</BaseButton>
  </div>
</template>
<script setup lang="ts">
import { BaseButton } from 'vuetage'
</script>

<style lang="scss">
.shop-now-button {
  display: flex;
  justify-content: center;
}
</style>
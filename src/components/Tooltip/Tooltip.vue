<template>
  <div style="position: relative">
    <span @mouseenter="show = true" @mouseleave="show = false">
      <slot name="hover"></slot>
    </span>
    <div class="tooltip" v-if="show">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";

const show = ref(false)
</script>

<style>
.tooltip {
  min-width: 150px;
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  top: 20px;
  left: 10px;
  opacity: 0.9;
  z-index: 999;
}
</style>
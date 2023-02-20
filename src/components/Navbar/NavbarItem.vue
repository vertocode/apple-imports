<template>
  <li class="navbar-item m-1">{{ itemName }}</li>
</template>

<script setup>
const props = defineProps({
  itemName: String
})
</script>

<style lang="scss">
.navbar-item {
  list-style-type: none;
  cursor: pointer;
  padding-left: 1rem;
}
</style>
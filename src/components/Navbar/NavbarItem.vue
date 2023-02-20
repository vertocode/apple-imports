<template>
  <li class="navbar-item m-1" style="text-decoration: none">{{ itemName }}</li>
</template>

<script setup>
const props = defineProps({
  itemName: String
})
</script>

<style lang="scss">
.navbar-item {
  color: rgba(255, 255, 255, .8);
  list-style-type: none;
  cursor: pointer;
  padding-left: 1rem;
  li {
    text-decoration: none;
  }
}
.navbar-item:hover {
  color: #05cadc;
}
</style>
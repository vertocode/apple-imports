<template>
  <div class="back-button-content">
    <router-link :to="props?.route || '/'">
      <button class="back-button">&#9664; Back</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  route?: string
}

const props = defineProps<Props>()

</script>

<style lang="scss" scoped>
.back-button-content {
  display: flex;
  justify-content: left;
  margin: 0 2em;
  .back-button {
    width: max-content;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #555;
    }

    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
      fill: #fff;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
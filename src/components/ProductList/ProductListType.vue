<template>
  <router-link :to="listType.route" class="list-type-item">
    <div class="list-type-content">
      <img :src="listType.srcImg" alt="List Type" class="list-type-image" />
      <h3 class="list-type-title">{{ listType.name }}</h3>
      <h4 v-if="listType.description" class="list-type-description">{{ listType.description }}</h4>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  listType: { name: string; srcImg: string; route: string; description: string }
}>()
</script>

<style scoped lang="scss">
.list-type-item {
  text-align: center;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;

  .list-type-content {
    padding: 10px;

    .list-type-image {
      max-width: 100%;
      max-height: 200px;
      height: auto;
    }

    .list-type-title {
      margin-top: 10px;
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }

    .list-type-description {
      margin-top: 10px;
      font-size: 1.2rem;
      color: #666;
    }
  }

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>

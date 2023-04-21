<template>
  <div class="flex justify-center items-center h-full">
    <div class="card">
      <p class="text-5xl font-bold text-center">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('We\'re sorry, but no products match the selected filters at this time. Please try adjusting your search criteria and try again. Thank you for your understanding.');
</script>

<style scoped lang="scss">
$primary-color: #0077cc;

.card {
  margin: 5rem;
  width: 70%;
  font-size: 1.3rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  p {
    color: $primary-color;
    margin: 0;
  }
}
</style>
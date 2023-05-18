<template>
  <div v-if="show" class="error-toast" >
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const show = ref(false);
const message = ref('');

const emits = defineEmits(['showError']);

function showError(errorMessage) {
  message.value = errorMessage;
  show.value = true;
  setTimeout(() => {
    show.value = false;
  }, 5000);
}

emits('showError');

</script>

<style scoped>
.error-toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff4d4f;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>

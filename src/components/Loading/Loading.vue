<template>
  <div class="loading">
    <span class="spinner"></span>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
	isLoading: {
		type: Boolean,
		default: false
	}
})
const isLoading = ref(props.isLoading)
const text = ref('')
</script>

<style>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spinner 0.8s linear infinite;
  margin-bottom: 10px;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
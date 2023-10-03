<template>
  <div style="width: max-content">
    <button
        :disabled="disabled"
        class="custom-btn"
        :class="[
        {'btn-sm': size === 'small'},
        variantClass
      ]"
    >{{ action }}</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  action: String,
  disabled: Boolean,
  size: String,
  variant: {
    type: String,
    default: 'outline-primary'
  }
});

const variantClass = computed(() => {
  return `btn-${props.variant}`;
});
</script>

<style scoped lang="scss">
.custom-btn {
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }

  &.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  &.btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }

  &.btn-success:hover {
    background-color: #1e7e34;
    border-color: #1e7e34;
  }

  &.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }

  &.btn-danger:hover {
    background-color: #c82333;
    border-color: #c82333;
  }

  &.btn-outline-primary {
    background-color: transparent;
    border-color: #007bff;
    color: #007bff;
  }

  &.btn-outline-primary:hover {
    background-color: #007bff;
    color: #fff;
  }

  &.btn-outline-success {
    background-color: transparent;
    border-color: #28a745;
    color: #28a745;
  }

  &.btn-outline-success:hover {
    background-color: #28a745;
    color: #fff;
  }

  &.btn-outline-danger {
    background-color: transparent;
    border-color: #dc3545;
    color: #dc3545;
  }

  &.btn-outline-danger:hover {
    background-color: #dc3545;
    color: #fff;
  }
}
</style>

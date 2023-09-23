<template>
  <div style="width: max-content">
    <button
        :disabled="disabled"
        class="custom-btn"
    :class="[
    {'btn-sm': size === 'small'},
    `btn-${variant}`
    ]"
    >{{ action }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  action: String,
  disabled: Boolean,
  size: String,
  variant: {
    type: String,
    default: 'outline-primary'
  }
})
</script>

<style scoped>
.custom-btn {
  padding: 10px 20px;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.custom-btn:hover {
  background-color: #0056b3;
}

</style>

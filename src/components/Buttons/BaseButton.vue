<template>
  <div style="width: max-content">
    <button :disabled="disabled" class="btn btn-outline-primary">{{ action }}</button>
  </div>
</template>

<script setup>

const props = defineProps({
  action: String,
  disabled: Boolean
})
</script>
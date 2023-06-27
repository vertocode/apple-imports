<template>
  <div style="width: max-content">
    <button
        :disabled="disabled"
        class="btn btn-outline-primary"
        :class="{ 'btn-sm': size === 'small' }"
    >{{ action }}</button>
  </div>
</template>

<script setup>

const props = defineProps({
  action: String,
  disabled: Boolean,
  size: String
})
</script>

<style scoped>
button {

}
</style>
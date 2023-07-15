<template>
  <div style="width: max-content">
    <button
        :disabled="disabled"
        class="btn"
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
button {

}
</style>
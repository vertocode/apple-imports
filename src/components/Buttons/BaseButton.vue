<template>
  <div>
    <button>{{ action }}</button>
  </div>
</template>

<script setup>

const props = defineProps({
  action: String
})
</script>
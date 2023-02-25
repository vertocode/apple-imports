<template>
  <div class="success-toasted">
    <h1>{{ props.title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style>
.success-toasted {
  border-radius: 5%;
  border: rgba(0, 0, 0, 0.6) solid 3px;
  bottom: 50em;
  position: absolute;
  background-color: #88e188;
  width: 50%;
  height: 5em;
}
</style>
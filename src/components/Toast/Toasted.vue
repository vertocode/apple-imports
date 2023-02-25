<template>
  <div :class="`${props.state}-toasted`">
    <h1>{{ title }}</h1>
    <h4 v-if="props.description">{{ description }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  state: {
    type: String,
    required: false,
    default: 'success'
  }
})
</script>

<style>
.success-toasted {
  border-radius: 5%;
  border: rgba(0, 0, 0, 0.6) solid 3px;
  bottom: 40em;
  position: absolute;
  background-color: #88e188;
  width: 50%;
  height: max-content;
}
.error-toasted {
  border-radius: 5%;
  border: rgba(0, 0, 0, 0.6) solid 3px;
  bottom: 30em;
  position: absolute;
  background-color: #ea5959;
  width: 50%;
  height: max-content;
}
</style>
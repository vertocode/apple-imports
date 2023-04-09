<template>
  <div :class="`${props.state}-toasted`">
    <header>
      <h1>{{ title }}</h1>
      <span @click="emit('close')"><b>X</b></span>
    </header>
    <div>
      <h4 v-if="props.description">{{ description }}</h4>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])

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

<style lang="scss">
header {
  display: flex;
  span {
    font-size: 2rem;
    font-family: "Adelle Sans Devanagari", monospace;
    padding: 3px;
    cursor: pointer;
  }
}
.success-toasted {
  border-radius: 5%;
  border: rgba(0, 0, 0, 0.6) solid 3px;
  bottom: 50em;
  position: absolute;
  background-color: #88e188;
  width: 50%;
  height: max-content;
}
.error-toasted {
  border-radius: 5%;
  border: rgba(0, 0, 0, 0.6) solid 3px;
  bottom: 50em;
  position: absolute;
  background-color: #ea5959;
  width: 50%;
  height: max-content;
}
</style>
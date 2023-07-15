<template>
  <div :class="`${props.state}-toasted`" :data-cy="`${props.state}-toast`">
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

[class$="-toasted"] {
  margin: auto;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  border: rgba(0, 0, 0, 0.6) solid 3px;
  position: absolute;
  height: max-content;
  word-wrap: break-word !important;
}

.error-toasted {
  background-color: #DC3545;
}

.success-toasted {
  background-color: #28A745;
}

.warning-toasted {
  background-color: #FFA500;
}

</style>
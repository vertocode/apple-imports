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
  position: fixed;
  margin: auto;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: rgba(0, 0, 0, 0.6) solid 3px;
  width: 800px;
  height: max-content;
  word-wrap: break-word !important;
}

@media (max-width: 810px) {
  [class$="-toasted"] {
    width: 90%;
  }
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
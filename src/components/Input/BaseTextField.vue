<template>
  <div class="ba">
    <label>{{ label }}</label>
    <div :class="['input-wrapper', { 'with-icon': icon }]">
      <datalist id="search">
        <option v-for="option in store.state.products" :value="option.name" :key="option.name"/>
      </datalist>
      <input
        list="search"
        v-model="state.value"
        type="text"
        :placeholder="placeholder"
        :style="{ color: color }"
      >
    </div>
  </div>
</template>

<script setup>

import { reactive, watch } from "vue";
import { useStore } from "vuex";

const store = useStore()
const state = reactive({
  value: ''
})

const emits = defineEmits(['input-value'])

const props = defineProps({
  placeholder: String,
  label: String,
  color: String,
  icon: String,
  classInput: String
})

watch(() => state.value, () => emits('input-value', state.value))

</script>

<style>
.base-text-field input {
  margin: auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

.icon {
  margin-right: 5px;
}

.search-icon:before {
  content: "\f002"; /* Ícone de busca */
}

.with-icon {
  padding-left: 30px;
}
</style>
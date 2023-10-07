<template>
  <div class="base-text-field">
    <label>{{ label }}</label>
    <div :class="['input-wrapper', { 'with-icon': icon }]">
      <div class="icon" v-if="icon">
        <i :class="icon"></i>
      </div>
      <datalist id="search">
        <option v-for="option in options" :value="option.name" :key="option.name"/>
      </datalist>
      <input
        list="search"
        v-model="state.value"
        type="text"
        :placeholder="placeholder"
        :style="{ color }"
      >
      <button class="clear-button" v-if="state.value" @click="state.value = ''">
        <i class="fa fa-times-circle"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue"
import {useProductListStore} from "../../store/useProductListStore";

const state = reactive({
  value: ''
})

const emits = defineEmits(['input-value'])

const props = defineProps({
  placeholder: String,
  label: String,
  color: String,
  icon: String,
  classInput: String,
  options: {
    type: Array,
    default: []
  }
})

watch(() => state.value, () => emits('input-value', state.value))
</script>

<style scoped>
.base-text-field {
  margin: auto;
  position: relative;
  .icon {
    position: absolute;
    top: 30%;
    left: 3%;
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.search-icon:before {
  content: "\f002";
  font-family: "Font Awesome",sans-serif;
  color: #555;
  font-size: 14px;
}

.input-wrapper {
  position: relative;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;
}

input:focus {
  border-color: #007bff;
}

.with-icon input {
  padding-left: 30px;
}

.clear-button {
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.clear-button i {
  font-size: 16px;
  color: #ccc;
}
</style>
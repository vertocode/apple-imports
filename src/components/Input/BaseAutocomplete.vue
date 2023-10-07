<template>
  <div class="base-autocomplete">
    <select v-model="selectedValue">
      <option disabled value="">Selecione uma opção</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue'

const selectedValue = ref<string>('')

type Option = {
  value: string
  label: string
}
const props = defineProps<{
  options: Option[]
}>()

const emits = defineEmits(['value'])


watch(() => selectedValue.value, () => {
  emits('value', selectedValue.value)
})


</script>

<style scoped lang="scss">
.base-autocomplete {
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    font-size: 16px;
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: #007bff;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }
}
</style>

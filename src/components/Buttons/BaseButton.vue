<template>
  <div style="width: max-content">
    <button
        class="base-button"
        :class="[
          sizeClass,
          variantClass
        ]"
        :disabled="props.disabled"
        :title="titleMessage"
    >{{ action }}</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Size, Variant } from '../../typing/BaseButton'

interface Props {
  action?: string
  disabled?: boolean
  tooltipMessage?: string | null
  size?: Size
  variant?: Variant
}

const props = withDefaults(defineProps<Props>(), {
	action: 'Action',
	disabled: false,
	tooltipMessage: null,
	variant: 'outline-primary',
	size: 'medium'
})

const variantClass = computed(() => {
	return `btn-${props.variant}`
})

const titleMessage = computed(() => {
	return props.tooltipMessage ?? props.disabled ? 'This button is disabled.' : ''
})

const sizeClass = computed(() => {
	switch (props.size) {
	case 'small':
		return 'btn-small'
	case 'medium':
		return 'btn-medium'
	case 'large':
		return 'btn-large'
	}
})
</script>

<style scoped lang="scss">
.base-button {
  padding: 10px 20px;
  border: 1px solid transparent;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }

  &.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }

  &.btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }

  &.btn-success:hover {
    background-color: #1e7e34;
    border-color: #1e7e34;
  }

  &.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }

  &.btn-danger:hover {
    background-color: #c82333;
    border-color: #c82333;
  }

  &.btn-outline-primary {
    background-color: transparent;
    border-color: #007bff;
    color: #007bff;
  }

  &.btn-outline-primary:hover {
    background-color: #007bff;
    color: #fff;
  }

  &.btn-outline-success {
    background-color: transparent;
    border-color: #28a745;
    color: #28a745;
  }

  &.btn-outline-success:hover {
    background-color: #28a745;
    color: #fff;
  }

  &.btn-outline-danger {
    background-color: transparent;
    border-color: #dc3545;
    color: #dc3545;
  }

  &.btn-outline-danger:hover {
    background-color: #dc3545;
    color: #fff;
  }

  &.btn-small {
    font-size: 12px;
    padding: 5px 10px;
  }

  &.btn-medium {
    font-size: 14px;
    padding: 10px 20px;
  }

  &.btn-large {
    font-size: 18px;
    padding: 15px 30px;
  }

  &[disabled] {
    background-color: gray;
    border-color: gray;
    cursor: auto;
    &:hover {
      background-color: gray;
      border-color: gray;
    }
  }
}
</style>

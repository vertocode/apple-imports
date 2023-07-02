<template>
  <div>
    <nav class="sub-navbar">
      <ul
          class="px-5 items d-flex justify-content-evenly bg-opacity-100 shadow border-bottom gap-3 flex-wrap text-black-50 font-monospace">
        <li :class="{'link-primary': selectedType === item.type}" @click="select(item.type)" v-for="(item, index) in items" :key="index">{{ item.label }}</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: []
  },
  selectedType: {
    type: String,
    default: 'iphone'
  }
})

const emits = defineEmits(['select-product-type'])

const select = (type) => {
  emits('select-product-type', type)
}
</script>

<style lang="scss">
.sub-navbar {
  .items {
    font-size: 1.5rem;
    list-style-type: none;
  }

  .items li {
    margin: 10px 0;
    cursor: pointer;
    &:hover {
      background-color: gray;
    }
  }
}
</style>
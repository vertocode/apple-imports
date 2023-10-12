<template>
  <div>
    <nav class="sub-navbar">
      <ul class="nav-list">
        <li
            :class="['nav-item', { 'active': selectedType === item.type }]"
            @click="select(item.type)"
            v-for="(item, index) in items"
            :key="index"
        >
          <i v-if="item?.leftIcon" :class="item.leftIcon"></i>
          {{ item.label }}
          <i v-if="item?.rightIcon" :class="item.rightIcon"></i>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import BackButton from './Buttons/BackButton.vue'

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
  background-color: #007bff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.nav-list {
  width: 100%;
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 10px;
  cursor: pointer;
  color: #fff;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav-item.active {
  background-color: #0056b3;
}

.nav-item:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .sub-navbar {
    padding: 10px 0;
  }

  .nav-list {
    flex-wrap: wrap;
  }

  .nav-item {
    margin: 5px;
  }
}
</style>

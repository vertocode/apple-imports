<template>
  <nav style="cursor: pointer" @click="toggleMenu">
    <div class="hamburger-menu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul class="menu" :class="{ show: state.isMenuOpen }" @click="state.isMenuOpen = false">
      <li
          v-for="{ title, link, isVisible, leftIcon, rightIcon } in steps"
          :key="title"
          :class="{ active: route.path.includes(link) }"
          v-show="isVisible"
          @click="selectItem(link)"
      >
        <i v-if="leftIcon" :class="leftIcon"></i>
        {{ title }}
        <i v-if="rightIcon" :class="rightIcon"></i>
      </li>
    </ul>
  </nav>

</template>

<script setup>
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '../../store/useUserStore'

const userStore = useUserStore()
const route = useRoute()
const router = useRouter()

const props = defineProps({
	options: Array
})

const steps = computed(() => props.options)
const emit = defineEmits(['close'])

const selectItem = (link) => {
	toggleMenu()
	router.push(link)
}

const state = reactive({
	isMenuOpen: false
})

const toggleMenu = () => {
	state.isMenuOpen = !state.isMenuOpen
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 60px;
  padding: 0 50px;
  position: relative;
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 24px;
    cursor: pointer;
  }

  .bar {
    height: 3px;
    width: 24px;
    background-color: #fff;
    transition: transform 0.2s;
  }

  .menu {
    z-index: 1;
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    padding: 20px;
    width: 50vw;
    list-style: none;
  }

  .menu li {
    text-align: start;
    margin-bottom: 10px;
    cursor: pointer;
    border-bottom: 0.1px rgba(255, 255, 255, 0.21) solid;
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
  }

  .menu li.active {
   background-color: rgba(119, 149, 215, 0.45);
  }


  .menu li:hover {
    background-color: rgba(255, 255, 255, 0.46);
  }

  .show {
    display: block;
  }
}
</style>
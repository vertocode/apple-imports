<template>
  <nav>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <ul class="menu" :class="{ show: state.isMenuOpen }" @click="state.isMenuOpen = false">
      <li v-if="!store.state.userData.name"><router-link to="login">Login</router-link></li>
      <li
          v-if="store.state.userData.name"
          @click="emit('showEditProfile')"
      ><a href="#">Profile</a></li>
      <li v-for="step in options"><router-link :to="step.link">{{ step.title }}</router-link></li>
      <li v-if="store.state.userData.name" @click="logout"><router-link to="login">Logout</router-link></li>
    </ul>
  </nav>

</template>

<script setup>
import { reactive } from 'vue';
import { useStore } from "vuex";
import router from "../../router";

const store = useStore()
const props = defineProps({
  options: Array
})
const emit = defineEmits(['close'])

const state = reactive({
  isMenuOpen: false,
  showEditProfileModal: false
})

const toggleMenu = () => {
  state.isMenuOpen = !state.isMenuOpen
}

const logout = () => {
  // Remove User data.
  store.commit('setUserLogged', {})
  localStorage.clear()

  // Close dropdown.
  state.dropdownActivated = false

  // Redirect to the login screen.
  router.push('login')
}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 80px;
  padding: 0 50px;
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
    margin-top: 2rem;
    top: 80px;
    left: 0;
    background-color: #333;
    padding: 20px;
    width: 20rem;
    list-style: none;
  }

  .menu li {
    margin-bottom: 10px;
    cursor: pointer;
    border-bottom: 0.1px rgba(255, 255, 255, 0.21) solid;
  }

  .menu li:hover {
    background-color: rgba(255, 255, 255, 0.46);
  }

  .menu a {
    color: #fff;
    text-decoration: none;
  }

  .show {
    display: block;
  }
}
</style>
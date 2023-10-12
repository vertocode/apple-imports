<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Route not found</h2>
    <p>The page you are looking for does not exist.</p>
    <button @click="goHome">Return to the home page</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { useGeneralStore } from '../store/useGeneralStore'

const generalStore = useGeneralStore()
const router = useRouter()

const goHome = () => {
  generalStore.showNavbar = true

	router.push('/')
}

onMounted(() => {
  generalStore.showNavbar = false
})
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}

h1 {
  font-size: 8rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>

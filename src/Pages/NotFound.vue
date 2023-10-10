<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Rota não encontrada</h2>
    <p>A página que você está procurando não existe.</p>
    <button @click="goHome">Voltar para a página inicial</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const store = useStore()
const router = useRouter()


const goHome = () => {
	store.state.showNavbar = true

	router.push('/')
}

onMounted(() => {
	store.state.showNavbar = false
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

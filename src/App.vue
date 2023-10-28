<template>
  <div id="app">
    <Loading v-if="state.isLoading" :is-loading="true"></Loading>
    <Navbar />
    <div class="router-link">
      <router-view />
    </div>
    <Toasted
        :key="toasted"
        :title="toasted.title"
        :description="toasted.description"
        :state="toasted.status"
        v-if="toasted.isEnabled"
    />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { computed } from 'vue'
import { reactive } from 'vue'
import Loading from './components/Loading/Loading.vue'
import Toasted from './components/Toast/Toasted.vue'
import Footer from './components/Footer.vue'
import { useToastStore } from './store/useToastStore'
import { useGeneralStore } from './store/useGeneralStore'

const toastStore = useToastStore()
const generalStore = useGeneralStore()
const state = reactive({
	isLoading: generalStore.isLoading
})

const toasted = computed(() =>  toastStore.toasted)
</script>

<style>
body {
  position: relative;
  background-color: #EBEBEB;
  .router-link {
    min-height: 74.47vh;
  }
}
</style>
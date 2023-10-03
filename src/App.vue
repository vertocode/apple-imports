<template>
  <div id="app">
    <loading v-if="state.isLoading" :is-loading="true"></loading>
    <navbar />
    <router-view />
    <toasted
        :key="toasted"
        :title="toasted.title"
        :description="toasted.description"
        :state="toasted.status"
        v-if="toasted.isEnabled"
    />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import {computed} from "vue";
import { reactive } from "vue";
import Loading from './components/Loading/Loading.vue'
import Toasted from "./components/Toast/Toasted.vue";
import {useToastStore} from "./store/useToastStore";
import {useGeneralStore} from "./store/useGeneralStore";

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
}
</style>
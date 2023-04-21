<template>
  <div class="login">
    <form>
      <img src="https://i.imgur.com/efI3UN6.png" alt="logo">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="email">Email address</label>
        <input placeholder="example@domain.com" type="email" id="email" class="form-control" />
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="password">Password</label>
        <input placeholder="********" type="password" id="password" class="form-control" />
      </div>

      <!-- 2 column grid layout for inline styling -->
      <div class="row mb-4">
        <div class="col d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>

        <div class="col">
          <!-- Simple link -->
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <!-- Submit button -->
      <button type="button" class="btn btn-primary btn-block mb-4" @click="manualLogin">Sign in</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Sign in with:</p>
        <GoogleLogin :callback="loginWithGoogle" prompt/>
<!--        <p class="mt-5">Not a member? <a href="#">Register (in development)</a></p>-->
      </div>
    </form>
    <toasted
        v-if="state.toastEnabled"
        @close="state.toastEnabled = false"
        :state="state.stateToasted"
        :title="state.titleToasted"
        :description="state.descriptionToasted"
    ></toasted>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login'
import { useStore } from "vuex";
import { onMounted, reactive, watchEffect } from "vue";
import router from "../router";
import Toasted from '../components/Toast/Toasted.vue'

const store = useStore()
const state = reactive({
  toastEnabled: false,
  stateToasted: 'error',
  titleToasted: 'Something is wrong!',
  descriptionToasted: ''
})

const checkIfIsLoggedAndRedirect = (isLogged) => {
  if (isLogged) {
    router.push('product-list')
  }
}

const manualLogin = () => {
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const allUsers = store.state.allUsers
  const existAccount = allUsers.map(user => {
    if (user.email === email && user.password === password) {
      return user
    }
  }).filter(user => user)
  if (existAccount) {
    try {
      store.commit('setUserLogged', existAccount[0])
      state.toastEnabled = true
      state.stateToasted = 'success'
      state.titleToasted = 'You are logged now.'
      state.descriptionToasted = `Welcome ${store.state.userData.name || ''}!`
      checkIfIsLoggedAndRedirect(store.state.userData.name)
      setInterval(() => state.toastEnabled = false, 5000)
    } catch (e) {
      state.toastEnabled = true
      state.stateToasted = 'error'
      state.titleToasted = 'We regret to inform you that there appears to be an issue. Please verify your credentials and attempt to proceed again.'
      state.descriptionToasted = e
    }
  } else {
    state.toastEnabled = true
    state.stateToasted = 'error'
    state.titleToasted = 'Account not found on the base Data.'
    state.descriptionToasted = 'Sorry, you can Sign with Google or register in the system'
  }
  setTimeout(() => {
    state.toastEnabled = false
  }, 5000)
}

const loginWithGoogle = (response) => {
  // decodeCredential will retrive the JWT payload from the credential
  const userData = decodeCredential(response.credential)
  store.commit('setUserLogged', userData)
  state.toastEnabled = true
  setInterval(() => state.toastEnabled = false, 5000)
}

onMounted(() => checkIfIsLoggedAndRedirect())

watchEffect(() => checkIfIsLoggedAndRedirect(store.state.userData.name))
</script>

<style lang="scss">
.login {
  width: 70%;
  margin: 2em auto;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    margin-bottom: 3rem;
  }
}
</style>
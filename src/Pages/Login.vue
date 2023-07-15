<template>
  <div class="login m-auto mt-4">
    <form @submit.prevent>
      <img src="https://i.imgur.com/fCspoHI.jpg" alt="logo">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="email" >Username</label>
        <input v-model="email" placeholder="example@domain.com" data-cy="email" type="email" id="email" class="form-control" />
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="password" >Password</label>
        <input v-model="password" placeholder="********" type="password" data-cy="password" id="password" class="form-control" />
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

<!--        <div class="col">-->
<!--          &lt;!&ndash; Simple link &ndash;&gt;-->
<!--          <a href="#!">Forgot password?</a>-->
<!--        </div>-->
      </div>

      <!-- Submit button -->
      <button type="submit" :class="{ 'disabled': !isFormValid }" class="btn btn-primary btn-block mb-4" @click="manualLogin" data-cy="sign-in">Sign in</button>

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
    ></toasted>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login'
import { useStore } from "vuex";
import { computed, onMounted, reactive, ref } from "vue";
import router from "../router";
import Toasted from '../components/Toast/Toasted.vue'

const store = useStore()
const state = reactive({
  toastEnabled: false,
  stateToasted: 'error',
  titleToasted: 'Something is wrong!',
  descriptionToasted: ''
})
const email = ref('')
const password = ref('')
const isFormValid = computed(() => {
  return email.value && password.value
})

const checkIfIsLoggedAndRedirect = (isLogged) => {
  if (isLogged) {
    router.push('product-list')
  }
}

const manualLogin = () => {
  const allUsers = store.state.allUsers
  const existAccount = allUsers.map(user => {
    if (user.email === email.value && user.password === password.value) {
      return user
    }
  }).filter(user => user)
  if (existAccount.length) {
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
    state.stateToasted = 'warning'
    state.titleToasted = 'Login Error: Invalid credentials. Please check your username and password and try again.'
    state.descriptionToasted = 'You can Sign with Google if you do not have an account..'
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
  state.stateToasted = 'success'
  state.titleToasted = 'You are logged now.'
  state.descriptionToasted = `Welcome ${store.state.userData.name || ''}!`
  checkIfIsLoggedAndRedirect(store.state.userData.name)
  setInterval(() => state.toastEnabled = false, 5000)
}

onMounted(() => checkIfIsLoggedAndRedirect())
</script>

<style lang="scss">
.login {
  border-radius: 10%;
  max-width: 45em;
  background-color: white;
  border: 1px solid black;
  padding: 35px;
  height: 80%;
  img {
    width: 10em;
    margin-bottom: 3rem;
  }
}
</style>
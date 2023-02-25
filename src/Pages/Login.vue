<template>
  <div class="login">
    <form>
      <img src="https://i.imgur.com/efI3UN6.png" alt="logo">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Email address</label>
        <input placeholder="example@domain.com" type="email" id="form2Example1" class="form-control" />
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Password</label>
        <input placeholder="********" type="password" id="form2Example2" class="form-control" />
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
      <button disabled type="button" class="btn btn-primary btn-block mb-4">Sign in (in development)</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Sign in with:</p>
        <GoogleLogin :callback="callback" prompt/>
        <p class="mt-5">Not a member? <a href="#">Register (in development)</a></p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { decodeCredential } from 'vue3-google-login'
import { useStore } from "vuex";
import { onMounted, watchEffect } from "vue";
import router from "../router";

const store = useStore()

const callback = (response) => {
    // decodeCredential will retrive the JWT payload from the credential
    const userData = decodeCredential(response.credential)
    console.log("Handle the userData", userData)
    store.commit('setUserLogged', userData)
    console.log(store.state.userData)
}

const checkIfIsLoggedAndRedirect = (isLogged) => {
  if (isLogged) {
    router.push('product-list')
  }
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
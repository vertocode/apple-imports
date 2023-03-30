<template>
  <base-modal
    class="edit-profile-modal"
    title="Edit Profile"
  >
    <div>
      <img :src="userData.picture" alt="profile-img" style="border-radius: 10%">
    </div>
    <div></div>
    <div class="fields">
      <div>
        Name
        <br>
        <input type="text" v-model="state.profile.name">
      </div>
      <div>
        Email
        <br>
        <input id="email" type="email" v-model="state.profile.email">
      </div>
      <div id="password">
        Password
        <br>
        <input type="password" v-model="state.profile.password">
      </div>
    </div>
  </base-modal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
import { useStore } from "vuex"
import { reactive } from "vue";

const store = useStore()
const userData = store.state.userData

console.log(userData)
const state = reactive({
  profile: {
    name: userData.name,
    email: userData.email,
    password: userData.password
  }
})
</script>

<style lang="scss">
.edit-profile-modal {
  main {
    display: flex;
    justify-content: center;
    gap: 4rem;
    .fields {
      display: grid;
      grid-auto-rows: max-content;
      grid-gap: 10px;
      text-align: left;
      input {
        float: left;
      }
      #email {
        width: 25ch;
      }
      #email:focus {
        width: auto;
      }
    }
  }
}
</style>

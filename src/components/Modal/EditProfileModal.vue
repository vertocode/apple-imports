<template>
  <base-modal
    class="edit-profile-modal"
    title="Edit Profile"
    @close="emit('close')"
  >
    <div>
      <div class="mt-1">
        <img
            class="profile-picture"
            :src="userData.picture"
            alt="profile-img"
            style="border-radius: 10%">
      </div>
      <div></div>
      <div class="fields mt-4">
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
        <div style="width: 100%;">
          <base-button
              class="m-auto mt-3"
              :disabled="saveChangesDisabled"
              action="Save Changes"
              @click="saveChanges"
          ></base-button>
        </div>
      </div>
    </div>
  </base-modal>
</template>

<script setup>
import AllUsers from './../../data/AllUsers.json'
import BaseModal from './BaseModal.vue'
import BaseButton from './../Buttons/BaseButton.vue'
import { useStore } from "vuex"
import { computed, reactive } from "vue";

const store = useStore()
const userData = store.state.userData


const state = reactive({
  profile: {
    name: userData.name,
    email: userData.email,
    password: userData.password
  }
})

const emit = defineEmits(['close'])

const saveChangesDisabled = computed(() => {
  const { name, email, password } = store.state.userData

  const nameChanged = state.profile.name !== name
  const emailChanged = state.profile.email !== email
  const passwordChanged = state.profile.password !== password

  return ![nameChanged, emailChanged, passwordChanged].some(field => field)
})

const saveChanges = () => {
  const userData = {
    ...store.state.userData,
    ...state.profile
  }

  store.commit('updateUserData', userData)

  // TODO: Change to use the API.
  const index = AllUsers.findIndex(user => user.email === store.state.userData.email)
  AllUsers[index] = userData

  emit('close')
}
</script>

<style lang="scss">
.edit-profile-modal {
  main {
    display: flex;
    justify-content: center;
    gap: 4rem;
    .profile-picture {
      width: 15em;
    }
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

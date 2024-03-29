<template>
  <base-modal
    class="edit-profile-modal"
    title="Edit Profile"
    @close="emit('close')"
  >
    <loading v-if="state.isLoading" :is-loading="true"></loading>
    <div v-else>
      <div class="mt-1">
        <img
            class="profile-picture"
            :src="userData.picture"
            alt="profile-img"
            style="border-radius: 10%">
      </div>
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
              v-if="!saveChangesDisabled"
              class="m-auto mt-3"
              :loading="state.isLoading"
              :disabled="saveChangesDisabled"
              action="Save Changes"
              @click="saveChanges"
          >Save Changes</base-button>
        </div>
      </div>
    </div>
    <toasted
        v-if="state.toastEnabled"
        @close="state.toastEnabled = false"
        :state="state.titleToast.includes('error') ? 'error' : 'success'"
        :title="state.titleToast"
        :description="state.descriptionToast"
    ></toasted>
  </base-modal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
import { BaseButton } from 'vuetage'
import Toasted from './../Toast/Toasted.vue'
import { computed, onMounted, reactive } from 'vue'
import Loading from '../Loading/Loading.vue'
import { Users } from '../../services/users/user'
import { useUserStore } from '../../store/useUserStore'

const userStore = useUserStore()
const userData = userStore.userData

const state = reactive({
	profile: {
		name: userData.name,
		email: userData.email,
		password: userData.password
	},
	toastEnabled: false,
	titleToast: 'Successfully saved!',
	descriptionToast: '',
	isLoading: false
})

const emit = defineEmits(['close'])
const users = new Users()

onMounted(() => {
	state.isLoading = false
})

const saveChangesDisabled = computed(() => {
	const { name, email, password } = userStore.userData

	const nameChanged = state.profile.name !== name
	const emailChanged = state.profile.email !== email
	const passwordChanged = state.profile.password !== password

	return ![nameChanged, emailChanged, passwordChanged].some(field => field)
  || Object.values(state.profile).some(field => field === '')
})

const saveChanges = async () => {
	if (saveChangesDisabled.value) {
		return
	}
	state.isLoading = true

	const userData = {
		...userStore.userData,
		...state.profile
	}

	const allUsers = await users.getAllUsers()
	const index = allUsers.findIndex(user => user.email === userStore.userData.email)

	try {
		const response = await users.updateUserData(userData, index)

		userStore.userData = response?.data || userData
		state.titleToast = 'Successfully saved!'
	} catch (e) {
		state.titleToast = 'I apologize, as there appears to be an error occurring in the Rest API to change the profile data.'
		state.descriptionToast = e
	}
	state.toastEnabled = true
	state.isLoading = false

	setTimeout(() => {
		state.toastEnabled = false
	}, 5000)
}
</script>

<style lang="scss">
.edit-profile-modal {
  position: absolute;
  main {
    display: flex;
    justify-content: center;
    gap: 4rem;
    overflow: visible;
    .profile-picture {
      width: 15em;
      @media (max-width: 600px) {
       width: 10em;
      }
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

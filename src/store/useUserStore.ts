import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { GoogleUser, NormalUser } from '../typing/User'

type State = {
    allUsers: (NormalUser | GoogleUser)[],
    userData: (NormalUser | GoogleUser) | {}
}
export const useUserStore = defineStore('userStore', {
	state: (): State => ({
		allUsers: [],
		userData: {},
	}),
	getters: {
		isLogged(): boolean {
			// @ts-ignore
			return !!this.userData?.name
		}
	},
	actions: {
		async logout() {
			// Remove User data.
			this.userData = {}
			localStorage.clear()

			// Redirect to the login screen.
			const router = useRouter()
			await router.push('/login')
		}
	},
	persist: true
})

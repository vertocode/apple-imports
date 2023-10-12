import { defineStore } from 'pinia'

type State = {
    isLoading: boolean
	showNavbar: boolean
}
export const useGeneralStore = defineStore('generalStore',  {
	state: (): State => ({
		isLoading: false,
		showNavbar: true
	})
})

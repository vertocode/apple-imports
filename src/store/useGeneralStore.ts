import { defineStore } from 'pinia'

type State = {
    isLoading: boolean
}
export const useGeneralStore = defineStore('generalStore',  {
	state: (): State => ({
		isLoading: false,
	})
})

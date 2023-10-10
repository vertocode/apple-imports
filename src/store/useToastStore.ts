import { defineStore } from "pinia"

type State = {
    toasted: {
        title: string
        description?: string
        state: 'error' | 'success' | 'warning'
        isEnabled: boolean
    } | {}
}
export const useToastStore = defineStore("toastStore",  {
    state: (): State => ({
        toasted: {},
    })
})

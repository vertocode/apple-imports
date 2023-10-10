import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import './styles/main.scss'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
	clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID
})

app.mount('#app')

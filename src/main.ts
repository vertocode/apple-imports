import "bootstrap/dist/css/bootstrap.min.css"
import 'font-awesome/css/font-awesome.css'
import "bootstrap"

import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'
import './styles/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID
})

app.mount('#app')

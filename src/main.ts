import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
// @ts-ignore
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '180900081631-7j3aopdirsgrquj6phi9fs9fl4ml9e8i.apps.googleusercontent.com'
})

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/servicio/router/router'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(router).mount('#app')

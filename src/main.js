import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@/apis/home'
import '@/styles/common.scss'
import {createPinia} from 'pinia'
import {router} from '@/router'
import { imgLazyPlugin } from './directives/lazy'
import { loadingPlugin } from './directives/loading'

import { componentPlugin } from './components'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(loadingPlugin)
app.use(componentPlugin).use(imgLazyPlugin).mount('#app')

import '../packages/toaster/dist/style.css'

import { createApp } from 'vue'

import { createToaster } from '../packages/toaster'
import App from './App.vue'

const app = createApp(App)
app.use(createToaster()).mount('#app')

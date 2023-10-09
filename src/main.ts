import { createApp } from 'vue'

import { createToaster } from '../packages/toaster/src/index'
import App from './App.vue'

const app = createApp(App)
app.use(createToaster()).mount('#app')

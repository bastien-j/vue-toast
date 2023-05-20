import { createApp } from 'vue'

import App from './App.vue'
import { createToaster } from './toaster'

const app = createApp(App)
app.use(createToaster()).mount('#app')

import { type EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createToaster } from '@bastien-j/vue-toaster'
import '@bastien-j/vue-toaster/style.css'
import CustomToast from './components/CustomToast.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('CustomToast', CustomToast)
    app.use(createToaster())
  }
}

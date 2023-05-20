import { type EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createToaster } from '../../../src/toaster'
import CustomToast from './components/CustomToast.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('CustomToast', CustomToast)
    app.use(createToaster())
  }
}

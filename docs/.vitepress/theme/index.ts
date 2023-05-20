import { type EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createToaster } from '../../../src/toaster'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(createToaster())
  }
}

import { DefaultTheme, defineConfig } from 'vitepress'
import pkg from '../../package.json'

export default defineConfig({
  lang: 'en-US',
  title: "Vue Toaster",
  description: "A simple toast notification plugin for Vue 3",
  cleanUrls: true,
  base: '/vue-toaster/',
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bastien-j/vue-toaster' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: 'Reference', link: '/reference/ref-plugin-options', activeMatch: '/reference/' },
    { text: pkg.version, link: 'https://www.npmjs.com/package/@bastien-j/vue-toaster/v/' + pkg.version }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' }
      ]
    },
    {
      text: 'Configuration',
      items: [
        { text: 'Global vs. Local', link: '/guide/conf-global-vs-local' },
        { text: 'Position', link: '/guide/conf-position' },
        { text: 'Type', link: '/guide/conf-type' },
        { text: 'Duration', link: '/guide/conf-duration' },
        { text: 'Custom component', link: '/guide/conf-custom-toast' }
      ]
    }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {
          text: 'Plugin Options',
          link: '/reference/ref-plugin-options'
        },
        {
          text: 'Types',
          link: '/reference/ref-types'
        }
      ]
    }
  ]
}

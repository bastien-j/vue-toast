# Getting Started

:::warning
This plugin only support Vue 3 since [Vue 2 will reach End of Life (EOL) on December 31st, 2023](https://v2.vuejs.org/lts/).
:::

## Installation

Install `@bastien-j/vue-toaster` with your favorite package manager:

::: code-group
```sh [npm]
$ npm install @bastien-j/vue-toaster
```
```sh [yarn]
$ yarn add @bastien-j/vue-toaster
```
:::

Initialize the plugin and pass it to your app instance:

```js{2,3,6,9}
import { createApp } from 'vue'
import { createToaster } from '@bastien-j/vue-toaster'
import '@bastien-j/vue-toaster/style.css' // Toaster styles
import App from './App.vue'

const toaster = createToaster()
const app = createApp(App)

app.use(toaster)
app.mount('#app')
```

:::tip
Don't forget to import plugin styles.
:::
:::details
Once the plugin is loaded, the `ToastContainer` component will be globally registered.
:::

## Usage

The plugin support both Composition API and Option API (including usage in templates)

:::tip
Composition API will be used in the rest of the documentation.
:::

### Composition API

Use the `useToaster` function:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info('Should work!')
}
</script>

<template>
  <button @click="trigger()">Trigger toast</button>
</template>
```

<script setup>
import { useToaster } from '../../src/toaster'

const toaster = useToaster()

function trigger() {
  toaster.info('Should work!')
}
</script>
:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger()">Trigger toast</button>
</ClientOnly>
:::

### Option API / Template

Use the `$toaster` global property:

```vue
<template>
  <button @click="$toaster.info('Should work!')">Trigger toast</button>
</template>
```

:::raw
<ClientOnly>
  <button class="trigger-button" @click="$toaster.info('Should work!')">Trigger toast</button>
</ClientOnly>
:::

<style scoped>
.trigger-button {
  background-color: #0c8581;
  padding: 5px 7px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
}
</style>

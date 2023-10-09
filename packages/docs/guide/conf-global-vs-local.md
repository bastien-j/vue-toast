# Global vs. Local Configuration

You can configure your `Toast` components globally and/or locally.

:::tip
If you use both **global** and **local** configurations, the **local** configuration will extends the **global** one.
:::

## Global Configuration

To make all `Toast` components behave the same, pass an option object to the `createToaster` method:

```js
import { createApp } from 'vue'
import { createToaster } from '@bastien-j/vue-toaster'
import '@bastien-j/vue-toaster/style.css'
import App from './App.vue'

const toaster = createToaster(options) // [!code focus]
const app = createApp(App)

app.use(toaster)
app.mount('#app')
```

Consult the [Option Reference](../reference/ref-plugin-options) for full details on all config options.

## Local Configuration

You can also set options of your `Toast` components individually by using the `options` property:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Should work!',
    options // [!code focus]
  )
}
</script>

<template>
  <button @click="trigger()">Trigger toast</button>
</template>
```
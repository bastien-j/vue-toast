# Pause on hover

The toasts delay can be paused by hovering them.

:::tip
By default, `pauseOnHover` option is `enabled`.
:::

## Enabling / disabling `pauseOnHover`

To enable / disable `pauseOnHover`, simply set the `pauseOnHover` option:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'pauseOnHover disabled!',
    { pauseOnHover: false } // [!code focus]
  )
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
  toaster.info(
    'pauseOnHover disabled!',
    { pauseOnHover: false }
  )
}
</script>
:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger()">Trigger toast</button>
</ClientOnly>
:::

:::tip
This option [can be set globally](./conf-global-vs-local#global-configuration) when using the `createToaster` method.
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
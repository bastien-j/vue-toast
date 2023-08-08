# Duration

The duration determines the delay (in milliseconds) before the toasts will hide.

:::tip
By default, toasts will hide after `3000` milliseconds.
:::

## Change duration

To change the duration, simply set the `duration` option:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Should work!',
    { duration: 1000 } // [!code focus]
  )
}
</script>

<template>
  <button @click="trigger()">Trigger toast for 1s</button>
</template>
```

<script setup>
import { useToaster } from '../../src/toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Should work!',
    { duration: 1000 }
  )
}
function triggerNoProgress() {
  toaster.info(
    'Without progress bar!',
    { hideProgress: true }
  )
}
</script>
:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger()">Trigger toast for 1s</button>
</ClientOnly>
:::

:::tip
This option [can be set globally](./conf-global-vs-local#global-configuration) when using the `createToaster` method.
:::

## Progress bar

To hide the progress bar, set the `hideProgress` option:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Without progress bar!',
    { hideProgress: true } // [!code focus]
  )
}
</script>

<template>
  <button @click="trigger()">Trigger toast without progress bar</button>
</template>
```
:::raw
<ClientOnly>
  <button class="trigger-button" @click="triggerNoProgress()">Trigger toast without progress bar</button>
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
# Position

The position determines where the toasts will appear.

:::tip
By default, toasts will appear at the bottom of the screen.
:::

## Change position

To change the position, simply set the `position` option:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Should work!',
    { position: 'top' } // [!code focus]
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
    'Should work!',
    { position: 'top' }
  )
}
</script>
:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger()">Trigger top toast</button>
</ClientOnly>
:::

Consult the [Option Reference](../reference/ref-plugin-options#position) for available positions.

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
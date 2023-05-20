# Type

The type determines how the toasts will appear.

:::tip
By default, toasts will appear as `info` type.
:::

## Change type

To change the type, simply use the corresponding method:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.success('Should work!') // [!code focus]
}
</script>

<template>
  <button @click="trigger()">Trigger success toast</button>
</template>
```

<script setup>
import { useToaster } from '../../src/toaster'

const toaster = useToaster()

function trigger() {
  toaster.success('Should work!')
}
</script>
:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger()">Trigger success toast</button>
</ClientOnly>
:::

Consult the [Option Reference](../reference/ref-types) for available types.

<style scoped>
.trigger-button {
  background-color: #0c8581;
  padding: 5px 7px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
}
</style>
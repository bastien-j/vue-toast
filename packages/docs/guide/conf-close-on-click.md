# Close on click

The toasts can be closed by clicking them.

:::tip
By default, `closeOnClick` option is `enabled` and `hideCloseButton` option is `disabled`.
:::

## Enabling / disabling `closeOnClick`

To enable / disable `closeOnClick`, simply set the `closeOnClick` option:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'closeOnClick disabled!',
    { closeOnClick: false } // [!code focus]
  )
}
</script>

<template>
  <button @click="trigger()">Trigger toast</button>
</template>
```

<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger(hideClose = false) {
  toaster.info(
    hideClose ? 'close button hidden!' : 'closeOnClick disabled!',
    { closeOnClick: false, hideCloseButton: hideClose }
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

## Hiding the close button (`hideCloseButton`)

You can also hide the close button with the `hideCloseButton` option:

```vue
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'close button hidden!',
    {
      closeOnClick: false,
      hideCloseButton: true // [!code focus]
    }
  )
}
</script>

<template>
  <button @click="trigger()">Trigger toast without close button</button>
</template>
```

:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger(true)">Trigger toast without close button</button>
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
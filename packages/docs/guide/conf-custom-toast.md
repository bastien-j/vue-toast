# Custom Toast Component

You can customize the display of the toast by using your own Vue component.

## Using you own Toast component

To use a custom Toast component, simply set the `component` option:

:::code-group
```vue [App.vue]
<script setup>
import { useToaster } from '@bastien-j/vue-toaster'
import MyCustomToast from '@/components/MyCustomToast.vue' // [!code focus]

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Should work!',
    { component: MyCustomToast } // [!code focus]
  )
}
</script>

<template>
  <button @click="trigger()">Trigger custom toast</button>
</template>
```

```vue{6-8} [MyCustomToast.vue]
<script setup lang="ts">
import { computed } from 'vue'

import { StoredToast } from '@bastien-j/vue-toaster'

const props = defineProps<{
  toast: StoredToast
}>()

const classes = computed(() => {
  const options = props.toast.options
  const c = []
  if (options.type) c.push(`toast--${options.type}`)
  if (options.position) {
    if (['bottom-left', 'top-left'].includes(options.position)) c.push('toast--left')
    if (['bottom-right', 'top-right'].includes(options.position)) c.push('toast--right')
  }
  return c
})
</script>

<template>
  <div class="custom-toast" :class="classes">
    <div class="c-t-header">{{ toast.options.type }}</div>
    <div class="c-t-body">{{ toast.message }}</div>
  </div>
</template>

<style scoped lang="scss">
.custom-toast {
  align-self: center;
  border-radius: 8px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(0, 0%, 30%);
  pointer-events: initial;
  overflow: hidden;

  .c-t-header {
    padding: 4px;
    background-color: hsl(0, 0%, 15%);
  }
  .c-t-body {
    padding: 8px;
  }

  &.toast--info {
    color: hsl(214, 100%, 64%);
  }
  &.toast--left {
    align-self: flex-start;
  }
  &.toast--right {
    align-self: flex-end;
  }
}
</style>
```
:::

<script setup>
import { useToaster } from '@bastien-j/vue-toaster'

const toaster = useToaster()

function trigger() {
  toaster.info(
    'Should work!',
    { component: 'CustomToast' }
  )
}
</script>
:::raw
<ClientOnly>
  <button class="trigger-button" @click="trigger()">Trigger custom toast</button>
</ClientOnly>
:::

:::tip
If your custom Toast component is registered globally, you can also pass its name instead of the Vue component.
:::

:::tip
Your custom Toast component will receive a [`StoredToast`](../reference/ref-plugin-options) as a `toast` prop.
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

# Types

<script setup>
import { useToaster } from '../../src/toaster'

const toaster = useToaster()

function trigger(type) {
  toaster[type]('This is an error toast')
}
</script>

Refer to [Type](../guide/conf-type) to learn more.

## error

- Method : `useToaster().error()` or `$toaster.error()`

:::raw
<ClientOnly>
  <button class="trigger trigger-error" @click="trigger('error')">Trigger error</button>
</ClientOnly>
:::

## info

- Method : `useToaster().info()` or `$toaster.info()`

:::raw
<ClientOnly>
  <button class="trigger trigger-info" @click="trigger('info')">Trigger info</button>
</ClientOnly>
:::

## success

- Method : `useToaster().success()` or `$toaster.success()`

:::raw
<ClientOnly>
  <button class="trigger trigger-success" @click="trigger('success')">Trigger success</button>
</ClientOnly>
:::

## warn

- Method : `useToaster().warn()` or `$toaster.warn()`

:::raw
<ClientOnly>
  <button class="trigger trigger-warn" @click="trigger('warn')">Trigger warn</button>
</ClientOnly>
:::

<style scoped>
.trigger {
  border: 1px solid var(--vp-c-divider);
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 16px;
}
.trigger-error {
  color: hsl(354, 70%, 54%);
}
.trigger-info {
  color: hsl(211, 100%, 50%);
}
.trigger-success {
  color: hsl(134, 61%, 41%);
}
.trigger-warn {
  color: hsl(45, 100%, 51%);
}
</style>
<script setup lang="ts">
import { computed } from 'vue'

import type { StoredToast } from '../../packages/toaster/src/index'

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
    {{ toast.options.type }} - 
    {{ toast.message }}
  </div>
</template>

<style scoped lang="scss">
.custom-toast {
  align-self: center;
  border-radius: 5px;
  padding: 8px;
  background-color: hsl(0, 0%, 100%);
  pointer-events: initial;

  &.toast--left {
    align-self: flex-start;
  }
  &.toast--right {
    align-self: flex-end;
  }
}
</style>

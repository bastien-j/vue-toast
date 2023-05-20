<script setup lang="ts">
import { computed } from 'vue'

import { StoredToast } from '../toaster'

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
  <div class="toast" :class="classes">
    {{ toast.message }}
  </div>
</template>

<style lang="scss">
.toast {
  align-self: center;
  border-radius: 8px;
  color: hsl(0, 0%, 100%);
  padding: 16px;
  background-color: hsl(0, 0%, 100%);
  pointer-events: initial;

  &.toast--error {
    background-color: hsl(354, 70%, 54%);
  }
  &.toast--info {
    background-color: hsl(211, 100%, 50%);
  }
  &.toast--success {
    background-color: hsl(134, 61%, 41%);
  }
  &.toast--warn {
    background-color: hsl(45, 100%, 51%);
    color: hsl(0, 0%, 30%);
  }

  &.toast--left {
    align-self: flex-start;
  }
  &.toast--right {
    align-self: flex-end;
  }
}
</style>

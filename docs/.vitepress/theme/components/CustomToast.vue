<script setup lang="ts">
import { computed } from 'vue'

import { StoredToast } from '../../../../src/toaster'

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

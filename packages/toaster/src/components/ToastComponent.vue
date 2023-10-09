<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

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

const resumed = ref(false)
const progress = ref(0)

function pause() {
  if (!props.toast.options.pauseOnHover) return
  const timer = props.toast.timer
  timer.pause()
  const remaining = timer.getRemaing()
  const delay = timer.getDelay()
  progress.value = 100 - Math.round((remaining / delay) * 100)
  resumed.value = false
}

function resume() {
  if (!props.toast.options.pauseOnHover) return
  props.toast.timer.resume()
  resumed.value = true
}

onMounted(() => {
  setTimeout(() => {
    resumed.value = true
  }, 1)
})
</script>

<template>
  <div
    v-if="!toast.options.component"
    class="toast"
    :class="classes"
    @pointerenter="pause()"
    @pointerleave="resume()"
  >
    <div class="toast-content">
      {{ toast.message }}
      <div
        v-if="!toast.options.hideProgress"
        class="progress-bar"
        :class="{ resumed }"
        :style="{
          '--progress': `${progress}%`,
          '--progress-duration': `${toast.timer.getRemaing() / 1000}s`
        }"
      ></div>
    </div>
  </div>
  <component v-else :is="toast.options.component" :toast="toast" />
</template>

<style scoped lang="scss">
.toast {
  align-self: center;
  background-color: hsl(0, 0%, 30%);
  border-radius: 8px;
  box-shadow: 3px 3px 10px hsl(0, 0%, 50%);
  color: hsl(0, 0%, 100%);

  .toast-content {
    border-radius: inherit;
    overflow: hidden;
    padding: 16px;
    pointer-events: initial;
    position: relative;
  }

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

  .progress-bar {
    --progress-duration: 3s;
    --progress: 50%;

    background-color: hsl(0, 0%, 100%);
    bottom: 0;
    height: 4px;
    left: calc(0% - var(--progress));
    position: absolute;
    transition: var(--progress-duration) left linear;
    width: 100%;

    &.resumed {
      left: -100%;
    }
  }
}
</style>

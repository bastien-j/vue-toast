<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import { StoredToast, useToaster } from '../toaster'
import CloseIcon from './icons/CloseIcon.vue'
import ErrorIcon from './icons/ErrorIcon.vue'
import InfoIcon from './icons/InfoIcon.vue'
import SuccessIcon from './icons/SuccessIcon.vue'
import WarningIcon from './icons/WarningIcon.vue'

const CP_SIZE = 32
const CP_THICKNESS = 3

const toaster = useToaster()

const props = defineProps<{
  toast: StoredToast
}>()

const resumed = ref(false)
const progress = ref(0)

const classes = computed(() => {
  const options = props.toast.options
  const c = []
  if (options.type) c.push(`toast--${options.type}`)
  if (options.position) {
    if (['bottom-left', 'top-left'].includes(options.position)) c.push('toast--left')
    if (['bottom-right', 'top-right'].includes(options.position)) c.push('toast--right')
  }
if (options.closeOnClick) c.push('toast--closable')
  return c
})

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
      <div class="toast__icon">
        <ErrorIcon v-if="toast.options.type === 'error'" />
        <SuccessIcon v-else-if="toast.options.type === 'success'" />
        <WarningIcon v-else-if="toast.options.type === 'warn'" />
        <InfoIcon v-else />
      </div>
      {{ toast.message }}
      <button
        v-if="!toast.options.hideCloseButton"
        class="toast__close-btn"
        :style="{
          height: `${CP_SIZE}px`,
          width: `${CP_SIZE}px`
        }"
        @click="toaster.removeToast(toast)"
      >
        <CloseIcon class="toast__close-btn__icon" />
        <svg v-if="!toast.options.hideProgress" height="100%" width="100%" :viewBox="`0 0 ${CP_SIZE} ${CP_SIZE}`">
          <circle
            class="toast__circular-progress__track"
            :r="(CP_SIZE - CP_THICKNESS) / 2"
            :cx="CP_SIZE / 2"
            :cy="CP_SIZE / 2"
            fill="transparent"
            stroke="#ffffff80"
            :stroke-width="CP_THICKNESS"
          ></circle>
          <circle
            class="toast__circular-progress"
            :class="{ resumed }"
            :style="{
              '--cp-radius': (CP_SIZE - CP_THICKNESS) / 2,
              '--cp-progress': progress,
              '--cp-progress-duration': `${toast.timer.getRemaing() / 1000}s`
            }"
            :r="(CP_SIZE - CP_THICKNESS) / 2"
            :cx="CP_SIZE / 2"
            :cy="CP_SIZE / 2"
            fill="transparent"
            stroke="#ffffff"
            :stroke-width="CP_THICKNESS"
          ></circle>
        </svg>
      </button>
    </div>
  </div>
  <component v-else :is="toast.options.component" :toast="toast" />
</template>

<style scoped lang="scss">
.toast {
  align-self: center;
  border-radius: 16px;
  box-shadow: 4px 4px 10px hsla(0, 0%, 0%, 25%);
  color: hsl(0, 0%, 100%);

  .toast-content {
    align-items: center;
    border-radius: inherit;
    display: flex;
    gap: 12px;
    height: 56px;
    overflow: hidden;
    padding: 0px 16px;
    pointer-events: initial;
    position: relative;

    .toast__close-btn {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      display: inline-grid;
      padding: 0;
      place-content: center;
      position: relative;
      transition: background;

      .toast__close-btn__icon {
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }

      .toast__circular-progress {
        --cp-progress: 50;
        --cp-progress-duration: 3s;
        --cp-radius: 14;
        --cp-dasharray: calc(2 * 3.14 * var(--cp-radius));
        --cp-dashoffset: calc(var(--cp-dasharray) * ((100 - var(--cp-progress)) / 100));

        stroke-dasharray: var(--cp-dasharray);
        stroke-dashoffset: var(--cp-dashoffset);
        transition: var(--cp-progress-duration) stroke-dashoffset linear;

        &.resumed {
          stroke-dashoffset: 0;
        }
      }
    }
  }

  &.toast--closable {
    cursor: pointer;
  }

  &.toast--error {
    background-color: hsl(0, 75%, 42%);
  }
  &.toast--info {
    background-color: hsl(211, 71%, 49%);
  }
  &.toast--success {
    background-color: hsl(134, 53%, 44%);
  }
  &.toast--warn {
    background-color: hsl(29, 83%, 45%);
  }

  &.toast--left {
    align-self: flex-start;
  }
  &.toast--right {
    align-self: flex-end;
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

import { StoredToast, useToaster } from '../toaster'
import ToastComponent from './ToastComponent.vue'

const toaster = useToaster()

const top = computed(() =>
  toaster.toasts.value.filter((t) => t.options.position?.includes('top')).reverse()
)
const bottom = computed(() =>
  toaster.toasts.value.filter((t) => t.options.position?.includes('bottom')).reverse()
)

function close(toast: StoredToast) {
  if (!toast.options.closeOnClick) return
  toaster.removeToast(toast)
}
</script>

<template>
  <div id="toast-container">
    <div class="toast-container__top">
      <TransitionGroup name="list-top">
        <ToastComponent v-for="toast in top" :key="toast.transitionKey" :toast="toast" @click="close(toast)" />
      </TransitionGroup>
    </div>
    <div class="toast-container__bottom">
      <TransitionGroup name="list-bottom">
        <ToastComponent v-for="toast in bottom" :key="toast.transitionKey" :toast="toast" @click="close(toast)" />
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped lang="scss">
#toast-container {
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2023;

  .toast-container__top,
  .toast-container__bottom {
    display: flex;
    gap: 16px;
    height: 100%;
    left: 0;
    overflow: hidden;
    padding: 16px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .toast-container__top {
    flex-direction: column;
  }
  .toast-container__bottom {
    flex-direction: column-reverse;
  }

  .list-top-move,
  .list-top-enter-active,
  .list-top-leave-active,
  .list-bottom-move,
  .list-bottom-enter-active,
  .list-bottom-leave-active {
    transition: all 0.25s ease;
  }
  .list-top-enter-from,
  .list-top-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .list-bottom-enter-from,
  .list-bottom-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-top-leave-active,
  .list-bottom-leave-active {
    position: absolute;
  }
}
</style>

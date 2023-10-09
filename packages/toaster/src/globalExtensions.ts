import ToastContainer from './components/ToastContainer.vue'
import type { Toaster } from './toaster'

/**
 * Allows customizing existing types of the toaster that are used globally like `$toaster` and `<ToastContainer>`.
 *
 * @internal
 */
interface TypesConfig {}

declare module 'vue' {
  export interface ComponentCustomProperties {
    /**
     * {@link Toaster} instance used by the application.
     */
    $toaster: TypesConfig extends Record<'$toaster', infer T> ? T : Toaster
  }

  export interface GlobalComponents {
    ToastContainer: TypesConfig extends Record<'ToastContainer', infer T>
      ? T
      : typeof ToastContainer
  }
}

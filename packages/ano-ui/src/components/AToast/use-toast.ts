import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { ToastOptions } from './types'
import type { ToastEmits, ToastProps } from './toast'

export function useToast(props: ToastProps,
  emit: SetupContext<ToastEmits>['emit']) {
  const timer = ref()
  const visible = ref(false)

  const state = ref<ToastOptions>()

  const close = () => {
    if (timer.value)
      clearTimeout(timer.value)
    visible.value = false
    emit(CLOSE_EVENT)
  }

  const show = (options: ToastOptions = {}) => {
    const {
      position = 'default',
      message = '',
      duration = 2000,
    } = options

    visible.value = true

    state.value = {
      position,
      message,
      duration,
    }

    if (timer.value)
      clearTimeout(timer.value)

    timer.value = setTimeout(() => {
      close()
    }, state.value.duration)
  }

  return {
    state,
    show,
    close,
    visible,
  }
}

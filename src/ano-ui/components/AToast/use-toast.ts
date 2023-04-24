import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { ToastOptions } from './types'
import type { ToastEmits, ToastProps } from './toast'

export function useToast(props: ToastProps,
  emit: SetupContext<ToastEmits>['emit']) {
  let timer: NodeJS.Timeout
  const visible = ref(false)

  const state = ref<ToastOptions>()

  const close = () => {
    clearTimeout(timer)
    visible.value = false
    emit(CLOSE_EVENT)
  }

  const show = (options: ToastOptions = {}) => {
    const {
      position = 'default',
      message = '',
      duration = 2000,
      type,
    } = options

    visible.value = true

    state.value = {
      type,
      position,
      message,
      duration,
    }

    clearTimeout(timer)

    if (state.value.duration !== false)
      timer = setTimeout(close, state.value.duration)
  }

  return {
    state,
    show,
    close,
    visible,
  }
}

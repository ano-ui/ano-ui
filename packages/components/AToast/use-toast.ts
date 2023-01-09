import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { ToastOptions } from './types'
import type { ToastEmits, ToastProps } from './toast'

export const useToast = (
  props: ToastProps,
  emit: SetupContext<ToastEmits>['emit'],
) => {
  const timer = ref()
  const show = ref(false)

  const toastStatus = ref<ToastOptions>()

  const closeToast = () => {
    if (timer.value)
      clearTimeout(timer.value)
    show.value = false
    emit(CLOSE_EVENT)
  }

  const showToast = (options: ToastOptions = {}) => {
    const {
      position = 'default',
      message = '',
      duration = 3000,
    } = options

    show.value = true

    toastStatus.value = {
      position,
      message,
      duration,
    }

    if (timer.value)
      clearTimeout(timer.value)

    timer.value = setTimeout(() => {
      closeToast()
    }, toastStatus.value.duration)
  }

  return {
    show,
    toastStatus,

    showToast,
    closeToast,
  }
}

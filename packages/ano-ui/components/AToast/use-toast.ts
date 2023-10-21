import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { ToastOptions } from './types'
import type { ToastEmits, ToastProps } from './toast'

// @unocss-include

export function useToast(props: ToastProps, emit: SetupContext<ToastEmits>['emit']) {
  let timer: NodeJS.Timeout
  const visible = ref(false)

  const state = ref<ToastOptions>()

  function close() {
    clearTimeout(timer)
    visible.value = false
    emit(CLOSE_EVENT)
  }

  function show(options: ToastOptions = {}) {
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

  const classes = computed(() => {
    return [
      state.value?.position === 'default' && 'left-50% top-50% translate--50%',
      state.value?.position === 'top' && 'left-50% top-20% translate--50%',
      state.value?.position === 'bottom' && 'left-50% top-80% translate--50%',
    ] as const
  })

  return {
    state,
    show,
    close,
    visible,
    classes,
  }
}

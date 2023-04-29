import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { NotifyOptions } from './types'
import type { NotifyEmits, NotifyProps } from './notify'

// @unocss-include

export function useNotify(props: NotifyProps, emit: SetupContext<NotifyEmits>['emit']) {
  const timer = ref()
  const visible = ref(false)

  const state = ref<NotifyOptions>({})

  function close() {
    if (timer.value)
      clearTimeout(timer.value)
    visible.value = false
    emit(CLOSE_EVENT)
  }

  function show(options: NotifyOptions = {}) {
    state.value = {
      type: options.type ?? props.type,
      position: options.position ?? props.position,
      message: options.message ?? props.message,
      duration: options.duration ?? props.duration,
      showIcon: options.showIcon ?? props.showIcon,
      customIcon: options.customIcon ?? props.customIcon,
      showClose: options.showClose ?? props.showClose,
    }
    visible.value = true

    if (timer.value)
      clearTimeout(timer.value)

    timer.value = setTimeout(close, state.value.duration)
  }

  const classes = computed(() => {
    return [
      state.value?.position === 'default' && 'top-0 left-0 right-0',
      state.value?.position === 'top' && 'top-0 left-5 right-5 pt-5',
      state.value?.position === 'top-left' && 'top-0 left-0 pt-5 pl-5',
      state.value?.position === 'top-right' && 'top-0 right-0 pt-5 pr-5',
      state.value?.position === 'bottom' && '!top-auto bottom-0 left-5 right-5 mb-safe pb-5',
      state.value?.position === 'bottom-left' && '!top-auto bottom-5 left-5 mb-safe pl-5',
      state.value?.position === 'bottom-right' && '!top-auto bottom-5 right-5 mb-safe pr-5',
    ] as const
  })

  return {
    visible,
    state,
    classes,

    show,
    close,
  }
}

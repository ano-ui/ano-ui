import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { NotifyOptions } from './types'
import type { NotifyEmits, NotifyProps } from './notify'

export function useNotify(props: NotifyProps,
  emit: SetupContext<NotifyEmits>['emit']) {
  const timer = ref()
  const visible = ref(false)

  const state = ref<NotifyOptions>({})

  const close = () => {
    if (timer.value)
      clearTimeout(timer.value)
    visible.value = false
    emit(CLOSE_EVENT)
  }

  const show = (options: NotifyOptions = {}) => {
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

  return {
    visible,
    state,

    show,
    close,
  }
}

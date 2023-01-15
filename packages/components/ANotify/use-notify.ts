import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { NotifyOptions } from './types'
import type { NotifyEmits, NotifyProps } from './notify'

export const useNotify = (
  props: NotifyProps,
  emit: SetupContext<NotifyEmits>['emit'],
) => {
  const timer = ref()
  const showValue = ref(false)

  const notifyStatus = ref<NotifyOptions>({})

  const closeNotify = () => {
    if (timer.value)
      clearTimeout(timer.value)
    showValue.value = false
    emit(CLOSE_EVENT)
  }

  const showNotify = (options: NotifyOptions = {}) => {
    notifyStatus.value = {
      type: options.type ?? props.type,
      position: options.position ?? props.position,
      message: options.message ?? props.message,
      duration: options.duration ?? props.duration,
      showIcon: options.showIcon ?? props.showIcon,
      customIcon: options.customIcon ?? props.customIcon,
      showClose: options.showClose ?? props.showClose,
    }
    showValue.value = true

    if (timer.value)
      clearTimeout(timer.value)

    timer.value = setTimeout(() => {
      closeNotify()
    }, notifyStatus.value.duration)
  }

  return {
    showValue,
    notifyStatus,

    showNotify,
    closeNotify,
  }
}

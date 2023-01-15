import type { SetupContext } from 'vue'
import { ref } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { NotifyOptions, Options } from './types'
import type { NotifyEmits, NotifyProps } from './notify'

export const useNotify = (
  props: NotifyProps,
  emit: SetupContext<NotifyEmits>['emit'],
) => {
  const timer = ref()
  const showValue = ref(false)

  const notifyStatus = ref<Options>({
    type: props.type,
    position: props.position,
    duration: 3000,
  })

  const closeNotify = () => {
    if (timer.value)
      clearTimeout(timer.value)
    showValue.value = false
    emit(CLOSE_EVENT)
  }

  const showNotify = (options: NotifyOptions = {}) => {
    Object.assign(notifyStatus.value, options)
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

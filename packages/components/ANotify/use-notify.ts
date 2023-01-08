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
  const show = ref(false)

  const notifyStatus = ref<NotifyOptions>({
    color: 'primary',
    position: 'default',
    content: '',
    duration: 3000,
    showIcon: false,
    customIcon: false,
    showClose: false,
  })

  const closeNotify = () => {
    if (timer.value)
      clearTimeout(timer.value)
    show.value = false
  }

  const showNotify = (options?: NotifyOptions) => {
    const { color, position, duration, content, showIcon, customIcon, showClose } = options || {}
    show.value = true
    notifyStatus.value = {
      color: color || 'primary',
      position: position || 'default',
      duration: duration || 3000,
      content: content || '',
      showIcon: showIcon || false,
      customIcon: customIcon || false,
      showClose: showClose || false,
    }

    if (timer.value)
      clearTimeout(timer.value)

    timer.value = setTimeout(() => {
      closeNotify()
    }, notifyStatus.value.duration)
  }

  const handleClose = () => {
    closeNotify()
    emit(CLOSE_EVENT)
  }

  return {
    show,
    notifyStatus,

    showNotify,
    closeNotify,
    handleClose,
  }
}

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
  const show = ref(false)

  const notifyStatus = ref<Options>({
    color: 'primary',
    position: 'default',
    duration: 3000,
    content: '',
  })

  const closeNotify = () => {
    if (timer.value)
      clearTimeout(timer.value)
    show.value = false
  }

  const showNotify = (options: NotifyOptions = {}) => {
    const {
      color = 'primary',
      position = 'default',
      duration = 3000,
      content = '',
      showIcon = false,
      customIcon = false,
      showClose = false,
    } = options

    show.value = true

    notifyStatus.value = {
      color,
      position,
      duration,
      content,
      showIcon,
      customIcon,
      showClose,
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

import type { SetupContext } from 'vue'
import { ref, watch } from 'vue'
import { CLOSE_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'
import type { OverlayOptions } from './types'

export const useOverlay = (
  props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit'],
) => {
  const showValue = ref(false)

  watch(
    () => props.show,
    (val) => {
      showValue.value = val
    },
    { immediate: true },
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const showOverlay = (options: OverlayOptions) => {
    showValue.value = true
    emit(OPEN_EVENT)
  }

  const closeOverlay = () => {
    emit(UPDATE_SHOW_EVENT, false)
    showValue.value = false
    emit(CLOSE_EVENT)
  }

  return {
    showValue,

    showOverlay,
    closeOverlay,
  }
}

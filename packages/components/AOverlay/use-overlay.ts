import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CLOSE_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'
import type { OverlayOptions } from './types'

export const useOverlay = (
  props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit'],
) => {
  const show = ref(props.show || false)
  const showValue = computed<OverlayProps['show']>({
    get: () => props.show || show.value,
    set(val) {
      if (val)
        emit(OPEN_EVENT)
      else
        emit(CLOSE_EVENT)
      show.value = val
      emit(UPDATE_SHOW_EVENT, val)
    },
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const showOverlay = (options: OverlayOptions) => {
    showValue.value = true
  }

  const closeOverlay = () => {
    showValue.value = false
  }

  return {
    showValue,

    showOverlay,
    closeOverlay,
  }
}

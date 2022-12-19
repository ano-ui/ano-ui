import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CLOSE_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import type { PopupEmits, PopupProps } from './popup'
// import type { PopupOptions } from './types'

export const usePopup = (
  props: PopupProps,
  emit: SetupContext<PopupEmits>['emit'],
) => {
  const show = ref(props.show || false)
  const showValue = computed<PopupProps['show']>({
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

  return {
    showValue,
  }
}

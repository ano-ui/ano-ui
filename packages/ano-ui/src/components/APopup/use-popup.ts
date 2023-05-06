import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CLOSE_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import type { PopupEmits, PopupProps } from './popup'

// @unocss-include

export function usePopup(props: PopupProps, emit: SetupContext<PopupEmits>['emit']) {
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

  const classes = computed(() => {
    const { position } = props
    return [
      position === 'center' && 'left-50% top-50% translate--50%',
      position === 'top' && 'top-0 left-0 right-0',
      position === 'bottom' && 'bottom-0 left-0 right-0',
      position === 'left' && 'left-0 top-0 bottom-0',
      position === 'right' && 'right-0 top-0 bottom-0',
    ] as const
  })

  return {
    showValue,
    classes,
  }
}

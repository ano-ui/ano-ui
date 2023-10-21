import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CANCEL_EVENT, CLOSE_EVENT, OPEN_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import type { ActionSheetEmits, ActionSheetProps } from './action-sheet'

export function useActionSheet(props: ActionSheetProps, emit: SetupContext<ActionSheetEmits>['emit']) {
  const show = ref(props.show || false)
  const showValue = computed<ActionSheetProps['show']>({
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

  const cancelHandler = () => {
    showValue.value = false
    emit(CANCEL_EVENT)
  }

  return {
    showValue,

    cancelHandler,
  }
}

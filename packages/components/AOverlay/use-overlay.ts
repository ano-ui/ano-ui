import type { SetupContext } from 'vue'
import { CLOSE_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'

export const useOverlay = (
  props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit'],
) => {
  const closeHandler = (evt: MouseEvent) => {
    emit(CLOSE_EVENT, evt)
  }

  const moveHandler = (evt: TouchEvent) => {
    evt.stopPropagation()
  }

  return {
    closeHandler,
    moveHandler,
  }
}

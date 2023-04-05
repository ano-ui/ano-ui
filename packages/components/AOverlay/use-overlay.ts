import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'

export function useOverlay(props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit']) {
  const showValue = computed(() => props.show || false)

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  return {
    showValue,

    clickHandler,
  }
}

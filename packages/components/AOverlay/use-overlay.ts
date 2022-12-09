import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import type { AlignType } from '../composables'
import { CLOSE_EVENT, UPDATE_SHOW_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'
import type { OverlayOptions } from './types'

export const useOverlay = (
  props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit'],
) => {
  const _show = ref(props.show || false)
  const showValue = computed(() => props.show || _show.value)

  const align = ref<AlignType>('center')

  const showOverlay = (options: OverlayOptions) => {
    align.value = options.align || 'center'
    _show.value = true
    emit(UPDATE_SHOW_EVENT, true)
  }

  const closeOverlay = (evt: MouseEvent) => {
    _show.value = false
    emit(UPDATE_SHOW_EVENT, false)
    emit(CLOSE_EVENT, evt)
  }

  return {
    showValue,
    align,

    showOverlay,
    closeOverlay,
  }
}

import type { SetupContext } from 'vue'
import { ref } from 'vue'
import type { AlignType } from '../composables'
import { CLOSE_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'
import type { OverlayOptions } from './types'

export const useOverlay = (
  props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit'],
) => {
  const _show = ref(false)
  const _align = ref<AlignType>('center')

  const show = (options: OverlayOptions) => {
    _show.value = true
    _align.value = options.align || 'center'
  }

  const close = (evt: MouseEvent) => {
    _show.value = false
    emit(CLOSE_EVENT, evt)
  }

  return {
    _show,
    _align,

    show,
    close,
  }
}

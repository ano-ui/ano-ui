import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import type { AlignType } from '../composables'
import { CLICK_EVENT } from '../constants'
import type { OverlayEmits, OverlayProps } from './overlay'
import type { OverlayOptions } from './types'

export const useOverlay = (
  props: OverlayProps,
  emit: SetupContext<OverlayEmits>['emit'],
) => {
  const show = ref(props.show || false)
  const showValue = computed(() => props.show || show.value)

  const align = ref<AlignType>('center')

  const showOverlay = (options: OverlayOptions) => {
    align.value = options?.align || 'center'
    show.value = true
  }

  const closeOverlay = (evt: MouseEvent) => {
    show.value = false
    emit(CLICK_EVENT, evt)
  }

  return {
    showValue,
    align,

    showOverlay,
    closeOverlay,
  }
}

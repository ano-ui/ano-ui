import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'
import type { TagEmits, TagProps } from './tag'

export const useTag = (
  props: TagProps,
  emit: SetupContext<TagEmits>['emit'],
) => {
  const disabled = computed(() => props.disabled)

  const clickHandler = (evt: MouseEvent) => {
    if (disabled.value)
      return

    emit(CLICK_EVENT, evt)
  }

  const closeHandler = (evt: MouseEvent) => {
    if (props.disabled)
      return

    emit(CLOSE_EVENT, evt)
  }

  return {
    disabled,

    clickHandler,
    closeHandler,
  }
}

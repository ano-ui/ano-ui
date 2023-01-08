import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'
import type { TagEmits, TagProps } from './tag'

export const useTag = (
  props: TagProps,
  emit: SetupContext<TagEmits>['emit'],
) => {
  const disabled = computed(() => props.disabled)

  const handleClick = () => {
    if (disabled.value)
      return

    emit(CLICK_EVENT)
  }

  const handleClose = () => {
    if (props.disabled)
      return

    emit(CLOSE_EVENT)
  }

  return {
    disabled,

    handleClick,
    handleClose,
  }
}

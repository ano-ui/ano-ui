import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { ButtonEmits, ButtonProps } from './button'

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit'],
) => {
  const disabled = computed(() => props.disabled || props.loading)

  const handleClick = () => {
    if (disabled.value)
      return

    emit(CLICK_EVENT)
  }

  return {
    disabled,

    handleClick,
  }
}

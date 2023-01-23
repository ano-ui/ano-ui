import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { ButtonEmits, ButtonProps } from './button'

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit'],
) => {
  const disabled = computed(() => props.disabled || props.loading)
  const className = computed(() => {
    const { type, size, variant, block, square, round } = props
    return [
      `a-${type}`,
      { block },
      `a-button-${size}`,
      `a-${variant}`,
      { 'a-button-disabled': disabled.value },
      { 'rounded-none': square },
      { 'rounded-full': round },
    ] as const
  })

  const clickHandler = (evt: MouseEvent) => {
    if (disabled.value)
      return

    emit(CLICK_EVENT, evt)
  }

  return {
    disabled,
    className,

    clickHandler,
  }
}

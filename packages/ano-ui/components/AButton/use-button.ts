import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { ButtonEmits, ButtonProps } from './button'

// @unocss-include

export function useButton(props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) {
  const disabled = computed(() => props.disabled || props.loading)

  function clickHandler(evt: MouseEvent) {
    if (disabled.value)
      return

    emit(CLICK_EVENT, evt)
  }

  const classes = computed(() => [
    `a-${props.type}`,
    props.type === 'default' && 'a-type-default',
    `a-button-${props.size}`,
    `a-${props.variant}`,
    props.block ? 'w-full flex' : 'inline-flex',
    disabled.value ? 'op-50' : '',
  ])

  return {
    disabled,
    classes,

    clickHandler,
  }
}

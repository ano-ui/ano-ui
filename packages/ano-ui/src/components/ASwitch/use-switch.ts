import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import type { SwitchEmits, SwitchProps } from './switch'

// @unocss-include

export function useSwitch(props: SwitchProps, emit: SetupContext<SwitchEmits>['emit']) {
  const disabled = computed(() => props.disabled || props.loading)
  const modelValue = computed(() => props.modelValue)
  const checked = computed(() => props.modelValue === props.activeValue)

  function toggle(evt: MouseEvent) {
    evt.stopPropagation()
    if (disabled.value)
      return
    const newValue = modelValue.value === props.activeValue ? props.inactiveValue : props.activeValue

    emit(UPDATE_MODEL_EVENT, newValue)
    emit(CHANGE_EVENT, newValue)
  }

  const dotTranslateClasses = computed(() => {
    if (props.size === 'mini')
      return 'translate-x-3.5'
    if (props.size === 'small')
      return 'translate-x-4.5'
    if (props.size === 'large')
      return 'translate-x-6.5'
    return 'translate-x-5.5'
  })

  return {
    disabled,
    modelValue,
    checked,
    dotTranslateClasses,

    toggle,
  }
}

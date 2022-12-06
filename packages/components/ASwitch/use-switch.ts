import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import type { SwitchEmits, SwitchProps } from './switch'

export const useSwitch = (
  props: SwitchProps,
  emit: SetupContext<SwitchEmits>['emit'],
) => {
  const disabled = computed(() => props.disabled || props.loading)
  const modelValue = computed(() => props.modelValue)
  const isChecked = computed(() => props.modelValue === props.activeValue)

  const toggle = (evt: MouseEvent) => {
    evt.stopPropagation()
    if (disabled.value)
      return
    const newValue = modelValue.value === props.activeValue ? props.inactiveValue : props.activeValue

    emit(UPDATE_MODEL_EVENT, newValue)
    emit(CHANGE_EVENT, newValue)
  }

  return {
    disabled,
    modelValue,
    isChecked,

    toggle,
  }
}

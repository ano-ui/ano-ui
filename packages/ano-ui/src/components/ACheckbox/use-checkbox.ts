import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { checkboxGroupKey } from '../tokens'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isArray } from '../utils'
import type { CheckboxEmits, CheckboxProps } from './checkbox'

export function useCheckbox(props: CheckboxProps,
  emit?: SetupContext<CheckboxEmits>['emit']) {
  const checkboxGroup = inject(checkboxGroupKey, undefined)
  const isGroup = computed(() => !!checkboxGroup)
  const size = computed(() => checkboxGroup?.size ?? props.size)
  const min = computed(() => checkboxGroup?.min)
  const max = computed(() => checkboxGroup?.max)
  const modelValue = computed(() => isGroup.value ? checkboxGroup!.modelValue : props.modelValue)
  const disabled = computed(() => {
    if (!isGroup.value)
      return props.disabled

    const { disabled, min, max } = checkboxGroup!

    if (disabled)
      return true
    if (isGroup.value && isArray(modelValue.value)) {
      if (min !== -1 && modelValue.value.length === min)
        return modelValue.value.includes(props.value)

      if (max !== -1 && modelValue.value.length === max)
        return !modelValue.value.includes(props.value)
    }

    return false
  })

  const checked = computed(() => {
    if (isGroup.value) {
      const value = checkboxGroup!.modelValue
      return Array.isArray(value)
        ? value.includes(props.value)
        : value === props.value
    }
    else {
      return props.modelValue
    }
  })

  const toggle = (e: MouseEvent) => {
    e.stopPropagation()
    if (disabled.value)
      return

    if (isGroup.value && isArray(modelValue.value)) {
      const newValue = [...modelValue.value]
      newValue.includes(props.value)
        ? newValue.splice(newValue.indexOf(props.value), 1)
        : newValue.push(props.value)

      checkboxGroup!.changeEvent(newValue)
    }
    else {
      emit && emit(UPDATE_MODEL_EVENT, !props.modelValue)
    }

    emit && emit(CHANGE_EVENT, !props.modelValue)
  }

  return {
    checkboxGroup,
    isGroup,
    size,
    min,
    max,
    disabled,
    modelValue,
    checked,

    toggle,
  }
}

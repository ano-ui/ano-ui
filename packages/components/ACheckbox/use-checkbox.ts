import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { checkboxGroupKey } from '../tokens'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { isArray } from '../utils'
import type { CheckboxEmits, CheckboxProps } from './checkbox'

export const useCheckbox = (
  props: CheckboxProps,
  emit?: SetupContext<CheckboxEmits>['emit'],
) => {
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

  const isChecked = computed(() => {
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
    isChecked,

    toggle,
  }
}

// const _checked = ref(false)

// watch(() => props.modelValue, (val) => {
//   _checked.value = val
// }, { immediate: true })

// watch(() => groupValue, (val) => {
//   if (isGroup)
//     _checked.value = val.includes(props.value)
// }, { immediate: true })

// const isDisabled = computed(() => {
//   if (!isGroup)
//     return props.loading || props.disabled

//   if (_disabled)
//     return true

//   if (min !== -1 && groupValue.length === min)
//     return groupValue.includes(props.value)

//   if (max !== -1 && groupValue.length === max)
//     return !groupValue.includes(props.value)
//   return false
// })

// const clickHandler = (e: MouseEvent) => {
//   e.stopPropagation()
//   if (isDisabled.value)
//     return

//   if (isGroup) {
//     if (min !== -1 && groupValue.length <= min) {
//       if (groupValue.includes(props.value))
//         return
//     }

//     if (max !== -1 && groupValue.length >= max) {
//       if (!groupValue.includes(props.value))
//         return
//     }

//     groupValue.includes(props.value)
//       ? groupValue.splice(groupValue.indexOf(props.value), 1)
//       : groupValue.push(props.value)
//   }

//   _checked.value = !_checked.value
//   emit('update:modelValue', _checked.value)
//   emit('click', e)
// }

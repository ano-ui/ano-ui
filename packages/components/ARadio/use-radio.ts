import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { radioGroupKey } from '../tokens'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import type { RadioEmits, RadioProps } from './radio'

export function useRadio(props: RadioProps,
  emit?: SetupContext<RadioEmits>['emit']) {
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const size = computed(() => radioGroup?.size ?? props.size)
  const disabled = computed(() => radioGroup?.disabled ?? props.disabled)
  const modelValue = computed<RadioProps['modelValue']>(() => isGroup.value ? radioGroup!.modelValue : props.modelValue)

  const checked = computed(() => isGroup.value ? radioGroup!.modelValue === props.value : props.modelValue)

  const toggle = (e: MouseEvent) => {
    e.stopPropagation()
    if (disabled.value)
      return

    const newValue = typeof modelValue.value === 'string' ? props.value : !modelValue.value
    if (isGroup.value)
      radioGroup!.changeEvent(newValue)
    else
      emit && emit(UPDATE_MODEL_EVENT, newValue)

    emit && emit(CHANGE_EVENT, newValue)
  }

  return {
    radioGroup,
    isGroup,
    size,
    disabled,
    modelValue,
    checked,

    toggle,
  }
}

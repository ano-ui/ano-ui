import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { BLUR_EVENT, CHANGE_EVENT, CLEAR_EVENT, FOCUS_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import type { InputEmits, InputProps } from './input'

export const useInput = (
  props: InputProps,
  emit: SetupContext<InputEmits>['emit'],
) => {
  const disabled = computed(() => props.disabled ?? false)
  const modelValue = computed(() => props.modelValue || '')
  const isClick = ref(false)
  const showPasswordText = ref(false)
  const focus = computed(() => (props.focus && !props.disabled) || isClick.value)

  const clickHandler = (evt: MouseEvent) => {
    evt.stopPropagation()
    if (!props.disabled)
      isClick.value = true
  }

  const focusHandler = () => {
    if (!props.disabled)
      emit(FOCUS_EVENT)
  }

  const blurHandler = () => {
    isClick.value = false
    emit(BLUR_EVENT)
  }

  const inputHandler = (e: Event) => {
    const _e = e as CustomEvent
    emit(UPDATE_MODEL_EVENT, _e.detail.value)
    emit(INPUT_EVENT, _e.detail.value)
    emit(CHANGE_EVENT, _e.detail.value)
  }

  const clearHandler = () => {
    emit(UPDATE_MODEL_EVENT, '')
    emit(INPUT_EVENT, '')
    emit(CHANGE_EVENT, '')
    emit(CLEAR_EVENT)
  }

  return {
    disabled,
    modelValue,
    isClick,
    showPasswordText,
    focus,

    focusHandler,
    clickHandler,
    blurHandler,
    inputHandler,
    clearHandler,
  }
}

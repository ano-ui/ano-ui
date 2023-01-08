import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CANCEL_EVENT, CONFIRM_EVENT } from '../constants'
import type { DialogEmits, DialogProps } from './dialog'
import type { DialogOptions } from './types'

export const useDialog = (
  props: DialogProps,
  emit: SetupContext<DialogEmits>['emit'],
) => {
  const show = ref(props.show || false)
  const showValue = computed(() => props.show || show.value)

  const DEFAULT_OPTIONS: DialogOptions = {
    title: props.title || '',
    message: props?.message || '',
    showConfirmButton: props?.showConfirmButton || true,
    showCancelButton: props?.showCancelButton || true,
    confirmButtonText: props?.cancelButtonText || '',
    cancelButtonText: props?.cancelButtonText || '',
  }

  const dialogStatus = ref<DialogOptions>({ ...DEFAULT_OPTIONS })

  const showDialog = (options: DialogOptions) => {
    show.value = true
    Object.assign(dialogStatus.value, DEFAULT_OPTIONS, options)
  }

  const onConfirm = () => {
    show.value = false
    emit(CONFIRM_EVENT)
  }

  const onCancel = () => {
    show.value = false
    emit(CANCEL_EVENT)
  }

  return {
    showValue,
    dialogStatus,

    showDialog,
    onConfirm,
    onCancel,
  }
}

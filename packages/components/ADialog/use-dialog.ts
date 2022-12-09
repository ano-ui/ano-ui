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

  const dialogStatus = ref<DialogOptions>()

  const showDialog = (options: DialogOptions) => {
    const {
      title, message, showConfirmButton, showCancelButton, confirmButtonText, cancelButtonText,
    } = options
    show.value = true
    dialogStatus.value = {
      title: props.title,
      message: props?.message || '',
      showConfirmButton: props?.showConfirmButton || true,
      showCancelButton: props?.showCancelButton || true,
      confirmButtonText: props?.cancelButtonText || '',
      cancelButtonText: props?.cancelButtonText || '',
    }
    console.log('showDialog', dialogStatus.value)
  }

  const onConfirm = (evt: MouseEvent) => {
    show.value = false
    emit(CONFIRM_EVENT, evt)
  }

  const onCancel = (evt: MouseEvent) => {
    show.value = false
    emit(CANCEL_EVENT, evt)
  }

  return {
    showValue,
    dialogStatus,

    showDialog,
    onConfirm,
    onCancel,
  }
}

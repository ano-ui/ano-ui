import type { SetupContext } from 'vue'
import { computed, ref } from 'vue'
import { CANCEL_EVENT, CONFIRM_EVENT } from '../constants'
import type { DialogEmits, DialogProps } from './dialog'
import type { DialogOptions } from './types'

export function useDialog(props: DialogProps,
  emit: SetupContext<DialogEmits>['emit']) {
  const show = ref(props.show || false)
  const showValue = computed(() => props.show || show.value)

  const dialogStatus = ref<DialogOptions>({})

  const showDialog = (options: DialogOptions) => {
    dialogStatus.value = {
      title: options.title ?? props.title,
      message: options.message ?? props.message,
      showConfirmButton: options.showConfirmButton ?? props.showConfirmButton,
      showCancelButton: options.showCancelButton ?? props.showCancelButton,
      confirmButtonText: options.confirmButtonText ?? props.confirmButtonText,
      cancelButtonText: options.cancelButtonText ?? props.cancelButtonText,
    }
    show.value = true
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

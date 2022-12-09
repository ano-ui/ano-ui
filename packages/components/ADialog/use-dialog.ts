import type { SetupContext } from 'vue'
import { computed } from 'vue'
import type { DialogEmits, DialogProps } from './dialog'

export const useDialog = (
  props: DialogProps,
  emit: SetupContext<DialogEmits>['emit'],
) => {
  const _show = computed(() => props.show || false)

  const handleConfirm = () => {
    emit('confirm')
  }

  const handleCancel = () => {
    emit('cancel')
  }

  const show = () => {
    emit('update:show', true)
  }

  return {
    _show,
    handleConfirm,
    handleCancel,
    show,
  }
}

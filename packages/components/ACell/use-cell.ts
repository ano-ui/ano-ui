import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { cellGroupKey } from '../tokens'
import { CLICK_EVENT } from '../constants'
import type { CellEmits, CellProps } from './cell'

export const useCell = (
  props: CellProps,
  emit: SetupContext<CellEmits>['emit'],
) => {
  const cellGroup = inject(cellGroupKey, undefined)
  const disabled = computed(() => cellGroup?.disabled ?? props.disabled)

  const handleClick = (etv: MouseEvent) => {
    if (disabled.value)
      return

    emit(CLICK_EVENT, etv)
  }

  return {
    disabled,

    handleClick,
  }
}

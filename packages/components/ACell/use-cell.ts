import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { cellGroupKey } from '../tokens'
import { CLICK_EVENT } from '../constants'
import type { CellEmits, CellProps } from './cell'

export function useCell(props: CellProps,
  emit: SetupContext<CellEmits>['emit']) {
  const cellGroup = inject(cellGroupKey, undefined)
  const arrow = computed(() => cellGroup?.arrow || props.arrow)
  const center = computed(() => cellGroup?.center || props.center)
  const clickable = computed(() => cellGroup?.clickable || props.clickable)

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  return {
    arrow,
    center,
    clickable,

    clickHandler,
  }
}

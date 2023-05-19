import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { cellGroupKey } from '../tokens'
import { CLICK_EVENT } from '../constants'
import type { CellEmits, CellProps } from './cell'

// @unocss-include

export function useCell(props: CellProps, emit: SetupContext<CellEmits>['emit']) {
  const cellGroup = inject(cellGroupKey, undefined)
  const arrow = computed(() => cellGroup?.arrow || props.arrow)
  const clickable = computed(() => cellGroup?.clickable || props.clickable)

  const classes = computed(() => {
    const _classes: string[] = []
    // #ifdef H5
    if (arrow.value || clickable.value)
      _classes.push('a-active-h5')

    // #endif
    return _classes
  })

  function clickHandler(evt: MouseEvent) {
    emit(CLICK_EVENT, evt)
  }

  return {
    arrow,
    clickable,
    classes,

    clickHandler,
  }
}

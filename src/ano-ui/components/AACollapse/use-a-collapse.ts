import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { ACollapseEmits, ACollapseProps } from './a-collapse'

// @unocss-include

export function useACollapse(props: ACollapseProps,
  emit: SetupContext<ACollapseEmits>['emit']) {
  const className = computed(() => [])

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  return {
    className,

    clickHandler,
  }
}

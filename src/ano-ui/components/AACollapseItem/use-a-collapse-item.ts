import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { ACollapseItemEmits, ACollapseItemProps } from './a-collapse-item'

// @unocss-include

export function useACollapseItem(props: ACollapseItemProps,
  emit: SetupContext<ACollapseItemEmits>['emit']) {
  const className = computed(() => [])

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  return {
    className,

    clickHandler,
  }
}

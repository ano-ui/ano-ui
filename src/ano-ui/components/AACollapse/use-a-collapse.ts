import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import { toArray } from '../utils'
import type { ACollapseEmits, ACollapseProps } from './a-collapse'
import { aCollapseAccordionInjectKey, aCollapseActivesInjectKey } from './a-collapse'

// @unocss-include

export function useACollapse(props: ACollapseProps,
  emit: SetupContext<ACollapseEmits>['emit']) {
  const className = computed(() => [])
  const actives = ref<(string | number)[]>([...toArray(props.defaultExpandedNames)])

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  provide(aCollapseActivesInjectKey, actives)
  provide(aCollapseAccordionInjectKey, toRef(props, 'accordion'))

  return {
    className,
    clickHandler,
    actives,
  }
}

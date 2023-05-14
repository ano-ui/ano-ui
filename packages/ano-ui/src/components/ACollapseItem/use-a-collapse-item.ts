import type { SetupContext } from 'vue'
import { computed, inject } from 'vue'
import { CLICK_EVENT } from '../constants'
import { aCollapseAccordionInjectKey, aCollapseActivesInjectKey } from '../ACollapse/a-collapse'
import type { ACollapseItemEmits, ACollapseItemProps } from './a-collapse-item'

// @unocss-include

export function useACollapseItem(props: ACollapseItemProps,
  emit: SetupContext<ACollapseItemEmits>['emit']) {
  const className = computed(() => [])

  const expands = inject(aCollapseActivesInjectKey)
  const accordion = inject(aCollapseAccordionInjectKey)

  if (!expands)
    throw new Error('Please use in AACollapse')

  const arrow = computed(() => expands.value.includes(props.name) ? 'bottom' : 'right')
  const expanded = computed(() => expands.value.includes(props.name))

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }
  const clickOpenCollapse = () => {
    if (props.disabled)
      return
    const index = expands.value.findIndex(name => props.name === name)
    if (accordion?.value && index === -1 && expands.value.length)
      expands.value = []

    index === -1 ? expands.value.push(props.name) : expands.value.splice(index, 1)
  }

  return {
    className,
    expands,
    expanded,
    arrow,
    clickHandler,
    clickOpenCollapse,
  }
}

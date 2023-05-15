import { computed, inject } from 'vue'
import { collapseContextKey } from '../tokens/collapse'
import type { CollapseItemProps } from './collapse-item'

export function useCollapseItem(props: CollapseItemProps) {
  const collapse = inject(collapseContextKey)

  const isActive = computed(() => collapse?.activeNames.value.includes(props.name))
  const arrow = computed(() => isActive.value ? 'bottom' : 'right')

  function handleHeaderClick() {
    if (props.disabled)
      return
    collapse?.handleItemClick(props.name)
  }

  return {
    isActive,
    arrow,

    handleHeaderClick,
  }
}

import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT, CLOSE_EVENT } from '../constants'
import type { TagEmits, TagProps } from './tag'

export function useTag(props: TagProps, emit: SetupContext<TagEmits>['emit']) {
  const disabled = computed(() => props.disabled)

  function clickHandler(evt: MouseEvent) {
    if (disabled.value)
      return

    emit(CLICK_EVENT, evt)
  }

  function closeHandler(evt: MouseEvent) {
    if (props.disabled)
      return

    emit(CLOSE_EVENT, evt)
  }

  const classes = computed(() => [
    `a-${props.type}`,
    props.type === 'default' && 'a-type-default',
    `a-tag-${props.size}`,
    `a-${props.variant}`,
    { '!p-0.5 aspect-square': props.iconOnly },
    { 'op-50': disabled.value },
  ])

  return {
    disabled,
    classes,

    clickHandler,
    closeHandler,
  }
}

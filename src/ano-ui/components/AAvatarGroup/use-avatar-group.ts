import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { AvatarGroupEmits, AvatarGroupProps } from './avatar-group'

// @unocss-include

export function useAvatarGroup(props: AvatarGroupProps,
  emit: SetupContext<AvatarGroupEmits>['emit']) {
  const className = computed(() => [])

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }
  const spliceOptions = computed(() => {
    const options = props.options || []
    return props.max ? options.slice(0, props.max - 1) : options
  })
  const reset = computed(() => {
    const length = (props.options || []).length
    return length - (props.max || 0) + 1
  })
  const lt = computed(() => {
    const length = (props.options || []).length
    return length > (props.max || 0)
  })

  return {
    className,
    spliceOptions,
    reset,
    lt,
    clickHandler,
  }
}

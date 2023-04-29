import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { AvatarEmits, AvatarProps } from './avatar'

// @unocss-include

export function useAvatar(props: AvatarProps,
  emit: SetupContext<AvatarEmits>['emit']) {
  const classes = computed(() => {
    return [
      props.size === 'mini' && 'w-8 h-8 text-xs',
      props.size === 'small' && 'w-10 h-10 text-sm',
      props.size === 'normal' && 'w-12 h-12 text-base',
      props.size === 'large' && 'w-14 h-14 text-lg',
    ] as const
  })

  const clickHandler = (evt: MouseEvent) => {
    emit(CLICK_EVENT, evt)
  }

  const mode = computed(() => {
    const modes = {
      fill: 'aspectFit',
      cover: 'aspectFill',
      contain: 'scaleToFill',
    }
    return modes[props.fit]
  })

  return {
    classes,
    clickHandler,
    mode,
  }
}

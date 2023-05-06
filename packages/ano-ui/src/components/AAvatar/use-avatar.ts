import type { SetupContext } from 'vue'
import { computed } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { AvatarEmits, AvatarProps } from './avatar'

// @unocss-include

const sizeClasses = {
  mini: 'w-8',
  small: 'w-10',
  normal: 'w-12',
  large: 'w-14',
}

export function useAvatar(props: AvatarProps, emit: SetupContext<AvatarEmits>['emit']) {
  const classes = computed(() => {
    const sizeClass = sizeClasses[props.size]
    return sizeClass ? [sizeClass] : []
  })

  function clickHandler(evt: MouseEvent) {
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

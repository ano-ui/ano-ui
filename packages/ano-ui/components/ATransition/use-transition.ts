import type { SetupContext } from 'vue'
import { computed, nextTick, ref, watch } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { TransitionEmits, TransitionProps } from './transition'
import type { AnoAnimations } from './types'

// @unocss-include

export const animations: AnoAnimations = {
  'fade': {
    enter: 'animate-fade-in',
    leave: 'animate-fade-out',
  },
  'fade-up': {
    enter: 'animate-fade-in-up',
    leave: 'animate-fade-out-down',
  },
  'fade-down': {
    enter: 'animate-fade-in-down',
    leave: 'animate-fade-out-up',
  },
  'fade-left': {
    enter: 'animate-fade-in-left',
    leave: 'animate-fade-out-left',
  },
  'fade-right': {
    enter: 'animate-fade-in-right',
    leave: 'animate-fade-out-right',
  },
  'slide-up': {
    enter: 'animate-slide-in-up',
    leave: 'animate-slide-out-down',
  },
  'slide-down': {
    enter: 'animate-slide-in-down',
    leave: 'animate-slide-out-up',
  },
  'slide-left': {
    enter: 'animate-slide-in-left',
    leave: 'animate-slide-out-left',
  },
  'slide-right': {
    enter: 'animate-slide-in-right',
    leave: 'animate-slide-out-right',
  },
  'zoom': {
    enter: 'animate-zoom-in',
    leave: 'animate-zoom-out',
  },

}

export function useTransition(props: TransitionProps, emit: SetupContext<TransitionEmits>['emit']) {
  const display = ref(false)
  const name = computed(() => props.name || 'fade')
  const duration = computed(() => props.duration || 200)

  const classes = ref('')
  async function enter() {
    if (display.value)
      return
    emit('beforeEnter')
    display.value = true
    classes.value = animations[name.value].enter
    await nextTick()
    emit('enter')

    setTimeout(() => {
      emit('afterEnter')
    }, duration.value)
  }

  async function leave() {
    if (!display.value)
      return
    emit('beforeLeave')
    classes.value = animations[name.value].leave
    await nextTick()
    emit('leave')

    setTimeout(() => {
      if (!props.show && display.value)
        display.value = false
      emit('afterLeave')
    }, duration.value)
  }

  watch(
    () => props.show,
    (val) => {
      val ? enter() : leave()
    },
    { immediate: true },
  )

  function clickHandler(evt: MouseEvent) {
    // evt.stopPropagation()
    emit(CLICK_EVENT, evt)
  }

  return {
    display,
    classes,

    clickHandler,
  }
}

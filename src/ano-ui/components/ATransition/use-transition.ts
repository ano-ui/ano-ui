import type { SetupContext } from 'vue'
import { computed, nextTick, ref, watch } from 'vue'
import { CLICK_EVENT } from '../constants'
import type { TransitionEmits, TransitionProps } from './transition'

export function useTransition(props: TransitionProps,
  emit: SetupContext<TransitionEmits>['emit']) {
  const display = ref(false)
  const name = computed(() => props.name || 'fade')

  const classes = ref('')
  const enter = () => {
    if (display.value)
      return
    emit('beforeEnter')
    display.value = true
    classes.value = `a-transition-${name.value}-enter`
    nextTick(() => {
      emit('enter')
      setTimeout(() => {
        classes.value = `a-transition-${name.value}-enter-to`
      }, 50)
      emit('afterEnter')
    })
  }

  const leave = () => {
    if (!display.value)
      return
    emit('beforeLeave')
    classes.value = `a-transition-${name.value}-leave`
    nextTick(() => {
      emit('leave')
      classes.value = `a-transition-${name.value}-leave-to`
      setTimeout(() => {
        if (!props.show && display.value)
          display.value = false
        emit('afterLeave')
      }, props.duration)
    })
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

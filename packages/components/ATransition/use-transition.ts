import type { SetupContext } from 'vue'
import { computed, nextTick, ref, watch } from 'vue'
import type { TransitionEmits, TransitionProps } from './transition'

export const useTransition = (
  props: TransitionProps,
  emit: SetupContext<TransitionEmits>['emit'],
) => {
  const display = ref(false)
  const name = computed(() => props.name || 'fade')

  const classes = ref('')
  const enter = () => {
    if (display.value)
      return
    display.value = true
    emit('beforeEnter')
    classes.value = `a-transition-${name.value}-enter`
    nextTick(() => {
      emit('enter')
      emit('afterEnter')
      classes.value = `a-transition-${name.value}-enter-to`
    })
  }

  const leave = () => {
    if (!display.value)
      return
    emit('beforeLeave')
    classes.value = `a-transition-${name.value}-leave`
    nextTick(() => {
      emit('leave')
      setTimeout(() => {
        if (!props.show && display.value)
          display.value = false
      }, props.duration)
      emit('afterLeave')
      classes.value = `a-transition-${name.value}-leave-to`
    })
  }

  watch(
    () => props.show,
    (val) => {
      val ? enter() : leave()
    },
    { immediate: true },
  )

  return {
    display,
    classes,
  }
}

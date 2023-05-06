<script setup lang='ts'>
import { transitionEmits, transitionProps } from './transition'
import { useTransition } from './use-transition'

const props = defineProps(transitionProps)
const emit = defineEmits(transitionEmits)
const { display, classes, clickHandler } = useTransition(props, emit)
</script>

<template>
  <div
    v-if="display" class="transition-all" :class="[classes, cc]"
    :style="[{ 'animation-duration': `${duration}ms` }, { 'animation-timing-function': timingFunction }, cs]"
    @click="clickHandler"
  >
    <slot />
  </div>
</template>

<style scoped>
/* fade */
.a-transition-fade-enter {
  --at-apply: 'op-0'
}

.a-transition-fade-enter-to {
  --at-apply: 'op-100'
}

.a-transition-fade-leave {
  --at-apply: 'op-100'
}

.a-transition-fade-leave-to {
  --at-apply: 'op-0'
}

/* fade-up */
.a-transition-fade-up-enter {
  --at-apply: 'op-0 translate-y-100%'
}

.a-transition-fade-up-enter-to {
  --at-apply: 'op-100 translate-y-0'
}

.a-transition-fade-up-leave {
  --at-apply: 'op-100 translate-y-0'
}

.a-transition-fade-up-leave-to {
  --at-apply: 'op-0 translate-y-100%'
}

/* fade-down */
.a-transition-fade-down-enter {
  --at-apply: 'op-0 -translate-y-100%'
}

.a-transition-fade-down-enter-to {
  --at-apply: 'op-100 translate-y-0'
}

.a-transition-fade-down-leave {
  --at-apply: 'op-100 translate-y-0'
}

.a-transition-fade-down-leave-to {
  --at-apply: 'op-0 -translate-y-100%'
}

/* fade-left */
.a-transition-fade-left-enter {
  --at-apply: 'op-0 -translate-x-100%'
}

.a-transition-fade-left-enter-to {
  --at-apply: 'op-100 translate-x-0'
}

.a-transition-fade-left-leave {
  --at-apply: 'op-100 translate-x-0'
}

.a-transition-fade-left-leave-to {
  --at-apply: 'op-0 -translate-x-100%'
}

/* fade-right */
.a-transition-fade-right-enter {
  --at-apply: 'op-0 translate-x-100%'
}

.a-transition-fade-right-enter-to {
  --at-apply: 'op-100 translate-x-0'
}

.a-transition-fade-right-leave {
  --at-apply: 'op-100 translate-x-0'
}

.a-transition-fade-right-leave-to {
  --at-apply: 'op-0 translate-x-100%'
}

/* slide-up */
.a-transition-slide-up-enter {
  --at-apply: 'translate-y-100%'
}

.a-transition-slide-up-enter-to {
  --at-apply: 'translate-y-0'
}

.a-transition-slide-up-leave {
  --at-apply: 'translate-y-0'
}

.a-transition-slide-up-leave-to {
  --at-apply: 'translate-y-100%'
}

/* slide-down */
.a-transition-slide-down-enter {
  --at-apply: '-translate-y-100%'
}

.a-transition-slide-down-enter-to {
  --at-apply: 'translate-y-0'
}

.a-transition-slide-down-leave {
  --at-apply: 'translate-y-0'
}

.a-transition-slide-down-leave-to {
  --at-apply: '-translate-y-100%'
}

/* slide-left */
.a-transition-slide-left-enter {
  --at-apply: '-translate-x-100%'
}

.a-transition-slide-left-enter-to {
  --at-apply: 'translate-x-0'
}

.a-transition-slide-left-leave {
  --at-apply: 'translate-x-0'
}

.a-transition-slide-left-leave-to {
  --at-apply: '-translate-x-100%'
}

/* slide-right */
.a-transition-slide-right-enter {
  --at-apply: 'translate-x-100%'
}

.a-transition-slide-right-enter-to {
  --at-apply: 'translate-x-0'
}

.a-transition-slide-right-leave {
  --at-apply: 'translate-x-0'
}

.a-transition-slide-right-leave-to {
  --at-apply: 'translate-x-100%'
}

/* zoom */
.a-transition-zoom-enter {
  --at-apply: 'scale-95'
}

.a-transition-zoom-enter-to {
  --at-apply: 'scale-100'
}

.a-transition-zoom-leave {
  --at-apply: 'scale-100'
}

.a-transition-zoom-leave-to {
  --at-apply: 'scale-95'
}

/* fade-zoom */
.a-transition-fade-zoom-enter {
  --at-apply: 'op-0 scale-95'
}

.a-transition-fade-zoom-enter-to {
  --at-apply: 'op-100 scale-100'
}

.a-transition-fade-zoom-leave {
  --at-apply: 'op-100 scale-100'
}

.a-transition-fade-zoom-leave-to {
  --at-apply: 'op-0 scale-95'
}
</style>

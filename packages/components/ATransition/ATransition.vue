<script setup lang='ts'>
import { transitionEmits, transitionProps } from './transition'
import { useTransition } from './use-transition'

const props = defineProps(transitionProps)
const emit = defineEmits(transitionEmits)
const { display, classes } = useTransition(props, emit)
</script>

<template>
  <div
    v-if="display" class="transition-all" :class="[classes, cc]"
    :style="[{ 'transition-duration': `${duration}ms` }, cs]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { collapseTransitionEmits, collapseTransitionProps } from './collapse-transition'
import { useCollapseTransition } from './use-collapse-transition'

const props = defineProps(collapseTransitionProps)
const emit = defineEmits(collapseTransitionEmits)

const { elementGuid, height } = useCollapseTransition(props, emit)
</script>

<template>
  <div
    class="overflow-hidden transition-height"
    :style="[{ height: `${height}px` }, { 'transition-duration': `${duration}ms` }, { 'transition-timing-function': timingFunction }]"
  >
    <div :id="elementGuid" :class="[customClass]" :style="[customStyle]">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { collapseTransitionEmits, collapseTransitionProps } from './collapse-transition'
import { useCollapseTransition } from './use-collapse-transition'

const props = defineProps(collapseTransitionProps)
const emit = defineEmits(collapseTransitionEmits)

const { elementGuid, animation } = useCollapseTransition(props, emit)
</script>

<template>
  <div class="overflow-hidden h-0" :animation="animation">
    <div :id="elementGuid" :class="[cc]" :style="[cs]">
      <slot />
    </div>
  </div>
</template>

<style scoped>
</style>

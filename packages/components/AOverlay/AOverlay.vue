<script setup lang="ts">
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './use-overlay'

const props = defineProps(overlayProps)
const emit = defineEmits(overlayEmits)

const { showValue, align, showOverlay, closeOverlay } = useOverlay(props, emit)

defineExpose({ show: showOverlay, close: closeOverlay })
</script>

<template>
  <div
    v-if="showValue" class="a-overlay-base" :class="[`a-overlay-flex-${align}`, cc]" :style="cs"
    @touchmove.stop.prevent="$event.stopPropagation()" @click="closeOverlay"
  >
    <slot />
  </div>
</template>

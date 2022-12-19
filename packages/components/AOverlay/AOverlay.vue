<script setup lang="ts">
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './use-overlay'

const props = defineProps(overlayProps)
const emit = defineEmits(overlayEmits)

const { showValue, showOverlay, closeOverlay } = useOverlay(props, emit)

defineExpose({ show: showOverlay, close: closeOverlay })
</script>

<template>
  <div
    v-if="showValue" class="a-overlay-base" :class="[cc]" :style="cs"
    @touchmove="$event.stopPropagation()" @click="closeOverlay"
  >
    <slot />
  </div>
</template>

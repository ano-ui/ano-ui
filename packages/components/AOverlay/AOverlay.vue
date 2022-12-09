<script setup lang="ts">
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './use-overlay'

const props = defineProps(overlayProps)
const emit = defineEmits(overlayEmits)

const { _show, _align, show, close } = useOverlay(props, emit)

defineExpose({ show, close })
</script>

<template>
  <div
    v-if="_show" class="a-overlay-base" :class="[`a-overlay-flex-${_align}`, cc]" :style="cs"
    @touchmove.stop.prevent="$event.stopPropagation()" @click="close"
  >
    <slot />
  </div>
</template>

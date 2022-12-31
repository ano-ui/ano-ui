<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './use-overlay'

const props = defineProps(overlayProps)
const emit = defineEmits(overlayEmits)

const { showValue, showOverlay, closeOverlay } = useOverlay(props, emit)

defineExpose({ show: showOverlay, close: closeOverlay })
</script>

<template>
  <ATransition
    :show="showValue" name="fade" :cc="['a-overlay-base', cc]" :cs="cs" :duration="duration"
    @touchmove="$event.stopPropagation()" @click="closeOverlay"
  >
    <slot />
  </ATransition>
</template>

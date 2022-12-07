<script setup lang="ts">
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './use-overlay'

const props = defineProps(overlayProps)
const emit = defineEmits(overlayEmits)

const { closeHandler, moveHandler } = useOverlay(props, emit)
</script>

<template>
  <div
    v-if="show" class="a-overlay-base" :class="[`a-overlay-flex-${align}`, cc]" :style="cs"
    @touchmove.stop.prevent="moveHandler" @click="closeHandler"
  >
    <slot />
  </div>
</template>

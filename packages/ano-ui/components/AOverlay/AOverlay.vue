<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'
import { overlayEmits, overlayProps } from './overlay'
import { useOverlay } from './use-overlay'

const props = defineProps(overlayProps)
const emit = defineEmits(overlayEmits)

const { showValue, clickHandler } = useOverlay(props, emit)
</script>

<template>
  <ATransition
    :show="showValue" name="fade" :custom-class="['z-100 fixed inset-0 bg-black bg-op-70', customClass]"
    :custom-style="customStyle" :duration="duration" @touchmove="$event.stopPropagation()" @click="clickHandler"
  >
    <slot />
  </ATransition>
</template>

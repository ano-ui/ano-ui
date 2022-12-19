<script setup lang='ts'>
import AOverlay from '../AOverlay/AOverlay.vue'
import { popupEmits, popupProps } from './popup'
import { usePopup } from './use-popup'
import type { PopupOptions } from './types'

const props = defineProps(popupProps)
const emit = defineEmits(popupEmits)
const { showValue, popupStatus, showPopup } = usePopup(props, emit)

const handleShowPopup = (options: PopupOptions) => showPopup(options)

defineExpose({ show: handleShowPopup })
</script>

<template>
  <AOverlay v-model:show="showValue">
    <div class="a-popup-base" :class="[`a-popup-position-${popupStatus.position}`, cc]" :style="cs">
      <slot />
    </div>
  </AOverlay>
</template>

<style scoped></style>

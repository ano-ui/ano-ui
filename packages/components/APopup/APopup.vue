<script setup lang='ts'>
import AOverlay from '../AOverlay/AOverlay.vue'
import { popupEmits, popupProps } from './popup'
import { usePopup } from './use-popup'
import type { PopupOptions } from './types'

const props = defineProps(popupProps)
const emit = defineEmits(popupEmits)
const { showValue } = usePopup(props, emit)
</script>

<template>
  <AOverlay v-model:show="showValue">
    <div v-if="showValue" class="a-popup-wrapper" :class="[`a-popup-wrapper-${position}`]">
      <div class="a-popup-base" :class="[`a-popup-position-${position}`, cc]" :style="cs" @click.stop>
        <slot />
      </div>
    </div>
  </AOverlay>
</template>

<style scoped>

</style>

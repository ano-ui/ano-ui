<script setup lang='ts'>
import AOverlay from '../AOverlay/AOverlay.vue'
import ATransition from '../ATransition/ATransition.vue'
import { popupEmits, popupProps } from './popup'
import { usePopup } from './use-popup'

const props = defineProps(popupProps)
const emit = defineEmits(popupEmits)
const { showValue } = usePopup(props, emit)

const animationName = {
  center: 'fade',
  top: 'slide-down',
  bottom: 'slide-up',
  left: 'slide-left',
  right: 'slide-right',
}
</script>

<template>
  <AOverlay :show="showValue" :duration="duration" @click="showValue = false" />
  <ATransition
    :show="showValue" :name="animationName[position]" :duration="duration"
    :cc="['a-popup-wrapper-base', `a-popup-wrapper-position-${position}`, cc]" :style="cs" @click.stop
  >
    <slot />
  </ATransition>
</template>

<style scoped>
</style>

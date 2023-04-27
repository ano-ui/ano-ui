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
.a-popup-wrapper-base {
  --at-apply: 'a-bg-2 fixed z-200'
}

.a-popup-wrapper-position-center {
  --at-apply: 'left-50% top-50% -translate-50%'
}

.a-popup-wrapper-position-top {
  --at-apply: 'top-0 left-0 right-0'
}

.a-popup-wrapper-position-bottom {
  --at-apply: 'bottom-0 left-0 right-0'
}

.a-popup-wrapper-position-left {
  --at-apply: 'top-0 left-0 bottom-0'
}

.a-popup-wrapper-position-right {
  --at-apply: 'top-0 right-0 bottom-0'
}
</style>

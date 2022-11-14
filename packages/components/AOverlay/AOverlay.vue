<script setup lang="ts">
import { AlignProp, BooleanProp, CustomClassProp, CustomStyleProp } from '../composables'

defineProps({
  cc: CustomClassProp,
  cs: CustomStyleProp,
  show: BooleanProp,
  align: AlignProp,
})

const emits = defineEmits(['close'])

const handleClose = (e: Event) => {
  emits('close', e)
}

const handleMove = (e: Event) => {
  e.stopPropagation()
}
</script>

<template>
  <div
    v-if="show" class="a-overlay-base" :class="[`a-overlay-flex-${align}`, cc]" :style="cs"
    @touchmove.stop.prevent="handleMove" @click="handleClose"
  >
    <slot />
  </div>
</template>

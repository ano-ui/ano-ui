<script setup lang="ts">
import { alignProp, ccProp, defaultFalseProp } from '../composables/useProps'

defineProps({
  cc: ccProp,
  show: defaultFalseProp,
  align: alignProp,
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
    v-if="show" class="a-overlay-base"
    :class="[`a-overlay-flex-${align}`, cc]" @touchmove.stop.prevent="handleMove"
    @click="handleClose"
  >
    <slot />
  </div>
</template>

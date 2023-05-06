<script setup lang='ts'>
import { useCustomClassProp, useCustomStyleProp } from '../composables'

defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
})
</script>

<template>
  <div class="a-text-color a-bg" :class="[{ dark }, cc]" :style="cs">
    <slot />
  </div>
</template>

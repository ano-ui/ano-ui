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
  <div class="a-bg a-text-color" :class="[{ dark }, cc]" :style="cs">
    <slot />
  </div>
</template>

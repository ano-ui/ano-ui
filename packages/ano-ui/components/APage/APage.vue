<script setup lang='ts'>
import { useCustomClassProp, useCustomStyleProp } from '../composables'

defineProps({
  dark: Boolean,
  cc: useCustomClassProp,
  cs: useCustomStyleProp,
})
</script>

<template>
  <div class="a-text-color a-bg" :class="[{ dark }, cc]" :style="cs">
    <slot />
  </div>
</template>

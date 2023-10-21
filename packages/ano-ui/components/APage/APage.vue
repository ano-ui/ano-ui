<script setup lang='ts'>
import { useCustomClassProp, useCustomStyleProp } from '../composables'

defineProps({
  dark: Boolean,
  customClass: useCustomClassProp,
  customStyle: useCustomStyleProp,
})
</script>

<template>
  <div class="a-text-color a-bg" :class="[{ dark }, customClass]" :style="customStyle">
    <slot />
  </div>
</template>

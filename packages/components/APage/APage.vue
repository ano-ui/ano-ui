<script setup lang='ts'>
import { BooleanProp } from '../composables/useProps'

defineProps({
  dark: BooleanProp,
})
</script>

<template>
  <div :class="{ dark }">
    <div class="a-bg-base a-color-base">
      <slot />
    </div>
  </div>
</template>

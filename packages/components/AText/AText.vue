<script setup lang='ts'>
import { CCProp } from '../composables/useProps'

// WIP
const props = defineProps({
  cc: CCProp,
})
</script>

<template>
  <div class="text-red p1">
    <slot />
  </div>
</template>

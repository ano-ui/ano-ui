<script setup lang='ts'>
import { ccProp } from '../composables/useProps'

// WIP
const props = defineProps({
  cc: ccProp,
})
</script>

<template>
  <div class="text-red p1">
    <slot />
  </div>
</template>

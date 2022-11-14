<script setup lang='ts'>
import { CustomClassProp } from '../composables'

// WIP
const props = defineProps({
  cc: CustomClassProp,
})
</script>

<template>
  <div class="text-red p1">
    <slot />
  </div>
</template>

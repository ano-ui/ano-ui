<script setup lang='ts'>
import { ccProp, defaultFalseProp, defaultTrueProp } from '../composables/useProps'

defineProps({
  cc: ccProp,
  divider: defaultFalseProp,
  card: defaultTrueProp,
})
</script>

<template>
  <div class="a-cell-group-base" :class="[{ 'a-cell-group-card': card, 'a-cell-group-divider': divider }, cc]">
    <slot />
  </div>
</template>

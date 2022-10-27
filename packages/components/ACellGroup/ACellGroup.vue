<script setup lang='ts'>
import { BooleanProp, BooleanTrueProp, CCProp, CSProp } from '../composables/useProps'

defineProps({
  cc: CCProp,
  cs: CSProp,
  divider: BooleanProp,
  card: BooleanTrueProp,
})
</script>

<template>
  <div
    class="a-cell-group-base" :class="[{ 'a-cell-group-card': card, 'a-cell-group-divider': divider }, cc]"
    :style="cs"
  >
    <slot />
  </div>
</template>

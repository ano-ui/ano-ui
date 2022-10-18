<script setup lang='ts'>
import { defaultFalseProp, defaultTrueProp } from '../composables/useProps'

defineProps({
  divider: defaultFalseProp,
  card: defaultTrueProp,
})
</script>

<template>
  <div class="a-cell-group-base" :class="{ 'a-cell-group-card': card, 'a-cell-group-divider': divider }">
    <slot />
  </div>
</template>

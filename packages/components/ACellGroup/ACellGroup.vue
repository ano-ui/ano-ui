<script setup lang='ts'>
import { provide, reactive, toRefs } from 'vue'
import { cellGroupKey } from '../tokens'
import { cellGroupProps } from './cell-group'

const props = defineProps(cellGroupProps)

provide(cellGroupKey,
  reactive({
    ...toRefs(props),
  }),
)
</script>

<template>
  <div
    class="a-cell-group-base" :class="[{ 'a-cell-group-card': card, 'a-cell-group-divider': divider }, cc]"
    :style="cs"
  >
    <slot />
  </div>
</template>

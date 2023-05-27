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
  <div v-if="title" class="a-text-color-2 p-4">
    {{ title }}
  </div>
  <div
    :class="[{ 'mx-4 rounded-lg overflow-hidden': inset },
             { '[&_a-cell:last-child_.a-cell]:after:content-none [&>.a-cell+.a-cell]:after:content-none': divider }, cc]"
    :style="cs"
  >
    <slot />
  </div>
</template>

<style scoped></style>

<script setup lang='ts'>
import { computed, provide, reactive, toRefs } from 'vue'
import { cellGroupKey } from '../tokens'
import { cellGroupProps } from './cell-group'

const props = defineProps(cellGroupProps)

provide(cellGroupKey,
  reactive({
    ...toRefs(props),
  }),
)

const className = computed(() => {
  const { inset, divider } = props

  const _className = {
    'a-cell-group-inset': inset,
    'a-cell-group-divider': divider,
  }
  // #ifdef H5
  Object.assign(_className, { 'a-cell-group-divider-h5': true })
  // #endif
  return _className
})
</script>

<template>
  <div :class="[className, cc]" :style="cs">
    <slot />
  </div>
</template>

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

<style scoped>
.a-cell-group-inset {
  --at-apply: 'mx-4 rounded-lg overflow-hidden'
}

.a-cell-group-divider {
  --at-apply: '[&_.a-cell-base]:after:absolute [&_.a-cell-base]:after:content-none [&_.a-cell-base]:after:bottom-0 [&_.a-cell-base]:after:left-4 [&_.a-cell-base]:after:right-4 [&_.a-cell-base]:after:border-b [&_.a-cell-base]:after:border-b-solid [&_.a-cell-base]:after:a-border [&_.a-cell-base]:after:scale-y-50% [&_a-cell:last-child_.a-cell-base]:after:display-none [&_a-field:last-child_.a-cell-base]:after:display-none'
}

.a-cell-group-divider-h5 {
  --at-apply: '[&_.a-cell-base:last-child]:after:display-none'
}
</style>

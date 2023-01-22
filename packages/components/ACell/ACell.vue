<script setup lang="ts">
import { computed } from 'vue'
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { arrow, clickHandler } = useCell(props, emit)

const className = computed(() => {
  const _className = {}
  // #ifdef H5
  Object.assign(_className, { 'a-cell-hover-h5': true })
  // #endif

  return _className
})
</script>

<template>
  <div
    class="a-cell-base" :class="[className, cc]" hover-class="a-cell-hover" hover-stay-time="100" :style="cs"
    @click="clickHandler"
  >
    <div class="a-cell-content-base">
      <div class="flex items-center gap1">
        <div v-if="icon" :class="icon" />
        <slot v-else name="icon" />
        <template v-if="title">
          {{ title }}
        </template>
        <slot v-else name="title" />
      </div>
      <div class="flex-1 text-right text-darkText text-sm">
        <div v-if="value">
          {{ value }}
        </div>
        <slot v-else name="value" />
      </div>
      <div v-if="arrow" class="i-carbon-chevron-right" />
      <slot name="right" />
    </div>
    <div v-if="label" class="text-darkText text-sm">
      {{ label }}
    </div>

    <slot v-else name="label" />
  </div>
</template>
